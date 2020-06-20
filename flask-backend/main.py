import flask
import pyrebase
import os
from flask import session
from flask import request
from sql_helpers import *
from flask import jsonify, redirect, url_for
import pyodbc
#from firebase import * #Causing errors when testing, Ashwin fix it
from flask_cors import CORS, cross_origin
import smtplib, ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = flask.Flask(__name__)
CORS(app)

app.secret_key = os.urandom(24)  # do we need this? read it somewhere, could possibly be helpful

server = os.environ.get("SERVER_ADDRESS")
database = os.environ.get("DATABASE_NAME")
username = os.environ.get("DB_USERNAME")
password = os.environ.get("DB_PASSWD")
driver = '{ODBC Driver 17 for SQL Server}'
con = 'Yes'

db_info = 'DRIVER=' + driver + ';SERVER=' + server + ';PORT=1433;DATABASE=' + database + ';UID=' + username + ';PWD=' + password + ';MARS_Connection=' + con
#print(db_info)

cnxn = pyodbc.connect(db_info)


# method to query the SQL database with standard SQL syntax
# returns a list
# colleges is the table where accurate information is stored
def get_query(query):
    cursor = cnxn.cursor()

    cursor.execute(query)
    myresult = cursor.fetchall()

    return myresult


# TO QUERY, CALL get_colleges()
# pass in: list of strings, anything with numbers or dates indicate with +/- (always inclusive)
# date format needs to be DD.MM.YYYY
# returns list of JSON objects with college information
def get_colleges(query_lst):
    query = "SELECT * FROM " + os.environ.get("TABLE_NAME")
    first_state = True
    if len(query_lst) > 0:
        query += " WHERE"

        for i in range(0, len(query_lst), 2):
            if query_lst[i] in dates:
                epoch = get_epoch(query_lst[i + 1][1:])
                query_lst[i + 1] = query_lst[i + 1][0] + str(epoch)
            if query_lst[i] in numbers:
                if query_lst[i + 1][0] == "+":
                    query += " " + str(query_lst[i]) + " >= " + str(query_lst[i + 1][1:])
                else:
                    query += " " + str(query_lst[i]) + " <= " + str(query_lst[i + 1][1:])
            else:
                if query_lst[i] == "state":
                    if first_state == True:
                        query += " (" 
                        first_state = False
                    query += str(query_lst[i]) + "=\'" + str(query_lst[i+1]) + "\'" 
                    if i < len(query_lst)-2 and query_lst[i+2] == "state":
                        query += " OR "
                        i += 2
                        continue
                    else:
                        query += ")"
                else:
                    query += " " + str(query_lst[i]) + "=\'" + str(query_lst[i+1]) + "\'"

            if i != len(query_lst) - 2:
                    query += " AND"

    elif len(query_lst) < 0:
        return "Incorrect Usage"

    query += ";"
    print(query)
    results = get_query(query)
    toBeSorted = []

    # convert to college object
    for element in results:
        c = College(element)
        toBeSorted.append(c)

    mergeSort(toBeSorted)
    json = []

    for college in toBeSorted:
        json.append(college.get_json())

    return json


# json_lst is a list of JSON objects with headers
# param is desired parameter to sort by
# is_descending is true if descending order required
# will return sorted list of json colleges
def get_order(json_lst, param, is_descending):
    json_out = []
    colleges = []

    for element in json_lst:
        element = json.loads(element)
        element = [v for v in dict.values(element)]
        c = College(element)
        colleges.append(c)

    mergeSort(colleges, param)

    for college in colleges:
        json_out.append(college.get_json())

    if not is_descending:
        json_out.reverse()

    return json_out


# helper function for ordering of get_college_names()
def get_ranking_order(college_lst):
    # -1 will screw up the sorting algorithm so just return a ridiculously high number
    if int(college_lst[3]) == -1:
        return 1000
    return int(college_lst[3])

def get_colleges_for_dashboard(query_lst):
    query = "SELECT * FROM " + os.environ.get("TABLE_NAME")

    if len(query_lst) > 0:
        query += " WHERE"
        for i in range(0, len(query_lst), 2):
            if query_lst[i] == "college_name":
                query += " " + query_lst[i] + "=\'" + query_lst[i + 1] + "\'"
            else:
                return "Incorrect Usage -- Not all parameters are college names"
            if i != len(query_lst) - 2:
                    query += " OR"
    elif len(query_lst) <= 0:
            return "Incorrect Usage"

    query += ";"
    print(query)
    results = get_query(query)
    toBeSorted = []

    # convert to college object
    for element in results:
        c = College(element)
        toBeSorted.append(c)

    mergeSort(toBeSorted)
    json = []

    for college in toBeSorted:
        json.append(college.get_json())

    return json


# function for kai to get names of all colleges
# returns a list of lists with name, abbreviation, alias of each college
# puts highest ranked colleges at the top of the list
def get_college_names():
    query_str = "SELECT college_name, alias, abbreviation, national_ranking FROM " + os.environ.get("TABLE_NAME") + ";"
    res = get_query(query_str)

    res.sort(key=get_ranking_order)

    ret_list = []

    for i in res:
        curr_lst = []
        curr_lst.append(i[0])
        curr_lst.append(i[1])
        curr_lst.append(i[2])
        # this will add national ranking to the names list for debugging purposes
        # curr_lst.append(i[3])
        ret_list.append(curr_lst)

    return ret_list


#QUERY TESTING
# lst = get_colleges(["national_ranking", "+15", "national_ranking", "-30"])
# for i in lst:
#     print(i)

# GET NAMES TESTING
# names = get_college_names()
# print(names)

#Routes testing for connectivity

@app.route("/test", methods = ['GET'])
def test_func():
    names = get_college_names()
    return jsonify(names)


@app.route("/")
@app.route("/loginhome/explore")
@app.route("/loginhome/login")
@app.route("/loginhome/signup")
@app.route("/loginhome/dashboard")
@app.route("/loginhome/page/:collegeName")
def my_index():
    return flask.render_template("index.html", token="Hello Flask and React")

@app.route("/filter", methods = ['POST'])
def test_filter():
    #Get the incoming request
    post_request = request.get_json(force=True)
    print(post_request)

    #Assign value from the request
    array = post_request['Array']
    filter_by = post_request['Filter']
    is_descending = post_request['IsDescending']

    colleges_array = get_colleges(array)
    # print(colleges_array)

    return jsonify(get_order(colleges_array, filter_by, is_descending))

@app.route("/individual", methods = ['POST'])
def individual():
    #gets incoming request
    post_request = request.get_json(force=True)

    name = post_request['name']

    #formats incoming request to proper format for calling function
    lst_to_call = ['college_name',name]
    college_json = get_colleges(lst_to_call)
    return jsonify(college_json)



#FIREBASE BEGINS HERE



config = {
    "apiKey": os.environ.get("API_KEY"),
    "authDomain": os.environ.get("AUTH_DOMAIN"),
    "databaseURL": os.environ.get("DATABASE_URL"),
    "projectId": os.environ.get("PROJECT_ID"),
    "storageBucket": os.environ.get("STORAGE_BUCKET"),
    "messagingSenderId": os.environ.get("MESSAGING_SENDER_ID"),
    "appId": os.environ.get("APP_ID"),
    "measurementId": os.environ.get("MEASUREMENT_ID")
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()
auth = firebase.auth()
dictio = {}


# parameters are Strings for email and password
# return boolean - true if successful creation, false if not

@app.route("/signup", methods = ['POST'])
def createUserWithEmailPassword():
    #gets incoming request
    post_request = request.get_json(force=True)

    email = post_request['Username']
    password = post_request['Password']
    try:
        auth.create_user_with_email_and_password(email, password)
        dictio['initialUser'] = email
        db.child("users").child(dictio['initialUser'][:-6]).update({"college": "none"})
    except:
        return json.dumps({"True": 1})
    createUserWithEmailPasswordTest(email, password)
    return json.dumps({"True": 2})

    # this should redirect to the homepage...


def createUserWithEmailPasswordTest(email, password):
    #gets incoming request
    #post_request = request.get_json(force=True)

    try:
        print(session['usr']) #if this doesn't error out, that means the user is logged in already
        print(dictio['usr'])
        print("here")
    except KeyError:
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            user = auth.refresh(user['refreshToken'])
            user_id = user['idToken']
            # session['usr'] = user_id
            dictio['usr'] = user_id
            dictio['currentUser'] = email
            print(dictio['currentUser'])
            print(dictio['currentUser'][:-6])
        except:
            return json.dumps({"True": 1})
    return json.dumps({"True": 2})


# db.child("users").push({"name": "raj"}) - this is a sample line
# FIXME: a pyrebase token expires after 1 hour, so we need to set a timer and refresh the token every hour
# or tell them that their token will run out
# FIXME: during logout, make sure that the user actually logs out and delete the session
# https://stackoverflow.com/questions/55261682/how-to-know-whether-user-is-logged-in-or-not-in-pyrebase-and-flask

# parameters are Strings for email and password
# return 1 if unsuccessful, 2 otherwise
# takes in an email and password from the request
@app.route("/login", methods = ['POST'])
def loginWithEmailPassword():
    post_request = request.get_json(force=True)

    # Assign value from the request
    email = post_request['Username']
    password = post_request['Password']

    #email = "aksportsmaniac@gmail.com"
    #password = "123456"
    #successfulLogin = False
    try:
        print(session['usr']) #if this doesn't error out, that means the user is logged in already
        print(dictio['usr'])
        print("here")
    except KeyError:
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            user = auth.refresh(user['refreshToken'])
            user_id = user['idToken']
            # session['usr'] = user_id
            dictio['usr'] = user_id
            dictio['currentUser'] = email
            print(dictio['currentUser'])
            print(dictio['currentUser'][:-6])
        except:
            return json.dumps({"True": 1})
    return json.dumps({"True": 2})

def loginWithEmailPasswordTest():
    # post_request = request.get_json(force=True)

    # # Assign value from the request
    # email = post_request['Username']
    # password = post_request['Password']
    email = "jim2@gmail.com"
    password = "123456"
    # successfulLogin = False
    try:
        # print(session['usr']) #if this doesn't error out, that means the user is logged in already
        print(dictio['usr'])
    except KeyError:
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            user = auth.refresh(user['refreshToken'])
            user_id = user['idToken']
            # session['usr'] = user_id
            dictio['usr'] = user_id
            dictio['currentUser'] = email
            print(dictio['currentUser'])
            print(dictio['currentUser'][:-6])
        except:
            return False
    
    return True

# deletes the current session - should take them to home page?
@app.route("/logout", methods = ['POST'])
def logout():
    # session.pop['usr']
    dictio.pop('usr')
    dictio['currentUser'] = 'none'


# returns boolean if user is logged in
def isLoggedIn():
    isLoggedIn = True
    try:
        print(session['usr'])
    except:
        isLoggedIn = False
    return isLoggedIn

@app.route("/addcollege", methods = ['POST'])
def addCollege():
    print("add function call")
    post_request = request.get_json(force=True)

    # Assign value from the request
    collegeName = post_request['CollegeName']
    
    colleges = db.child("users").child(dictio['currentUser'][:-6]).get().val()
    colleges[collegeName] = collegeName
    db.child("users").child(dictio['currentUser'][:-6]).update(colleges)

def addCollegeTest(collegeName):
    print("add function call")
    #post_request = request.get_json(force=True)

    # Assign value from the request
    # collegeName = post_request['CollegeName']
    
    colleges = db.child("users").child(dictio['currentUser'][:-6]).get().val()
    colleges[collegeName] = collegeName
    db.child("users").child(dictio['currentUser'][:-6]).update(colleges)


@app.route("/removecollege", methods = ['POST'])
def removeCollege():
    print("remove function call")
    post_request = request.get_json(force=True)

    # Assign value from the request
    collegeName = post_request['CollegeName']
    
    colleges = db.child("users").child(dictio['currentUser'][:-6]).get().val()
    colleges[collegeName] = "none"
    db.child("users").child(dictio['currentUser'][:-6]).update(colleges)

def removeCollegeTest(collegeName):
    print("remove function call")
    #post_request = request.get_json(force=True)

    # Assign value from the request
    #collegeName = post_request['CollegeName']
    
    colleges = db.child("users").child(dictio['currentUser'][:-6]).get().val()
    colleges[collegeName] = "none"
    db.child("users").child(dictio['currentUser'][:-6]).update(colleges)

def listColleges():
    colleges = db.child("users").child(dictio['currentUser'][:-6]).get().val()
    print(colleges)
    name_list = []
    for name in colleges.values():
        if name != "none":
            name_list.append(name)
    print("name list is ", end="")
    print(name_list)
    # create ret list of jsons, initialize to empty
    json_lst = []
    for element in name_list:
        # get_colleges() returns a list of jsons, but we'll only get one result out of it
        # so take the first json in the list and add it to our return list
        curr_college = get_colleges(["college_name", element])
        # make sure we actually found that school
        if len(curr_college) != 0:  
            print("found " + element)
            json_lst.append(curr_college[0])
        else:
            print("didn't find " + element)
    print(json_lst)
    return json_lst


#testing method
# if __name__ == '__main__':
#     print("im here")
#     # createUserWithEmailPassword("aksportsmaniac@gmail.com", "123456")
#     createUserWithEmailPasswordTest("jim2@gmail.com", "123456")
#     loginWithEmailPasswordTest()
#     print(dictio['currentUser'])
#     # db.child("users").child(short)
#     # print(db.child("users").child(dictio['currentUser'][:-6]).get().val())
#     # db.child("users").child(dictio['currentUser'][:-6]).update({"college": "ucsd"})
#     # colleges = db.child("users").child(dictio['currentUser'][:-6]).get().val()
#     # colleges['ucsb'] = 'ucsb'
#     # addCollege('USC')
#     # addCollege('University of Southern California')
#     addCollegeTest('University of California, San Diego')
#     #removeCollegeTest('college')
#     listColleges()

#     # print(colleges)
#     logout()
#     if ('usr' in dictio):
#         print("something went wrong here")
#     else:
#         print("good job!")
#     print(dictio['currentUser'])

@app.route("/dashboard", methods = ['POST'])
def dashboard():
    db.child("users").get().val()
    #print(db.get().val())
    #listColleges()
    colleges = db.child("users").child(dictio['currentUser'][:-6]).get().val()
    #print(colleges)
    
    name_list = []
    for name in colleges.values():
        if name != "none":
            name_list.append(name)
    query_lst = []
    for i in name_list:
        query_lst.append("college_name")
        query_lst.append(i)
    #print(query_lst)
    json_return = get_colleges_for_dashboard(query_lst)
    print(json_return)
    return json.dumps(json_return)

#method to send email for contact page
#sends email to redpandas920@gmail.com from itself
def sendEmail(email_address, subject_email, message_email):
    port = 465  # For SSL
    password = os.environ.get("DB_PASSWD")
    
    context = ssl.create_default_context()
    smtp_server = "smtp.gmail.com"
    email = "redpandas920@gmail.com"  # Enter your address

    msg = MIMEMultipart()
    msg['From'] = email
    msg['To'] = email
    msg['Subject'] = subject_email
    body = message_email
    body = MIMEText(body)
    msg.attach(body)

    with smtplib.SMTP_SSL("smtp.gmail.com:465") as server:
        server.login(email, password)
        server.sendmail(email, email, msg.as_string())

app.run(debug=True)