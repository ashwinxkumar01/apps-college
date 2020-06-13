import flask
import pyrebase
import os
from flask import session
from flask import request
from sql_helpers import *
from flask import jsonify
import pyodbc
# from firebase import * #Causing errors when testing, Ashwin fix it
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
CORS(app)

app.secret_key = os.urandom(24)  # do we need this? read it somewhere, could possibly be helpful

server = os.environ.get("SERVER_ADDRESS")
database = os.environ.get("DATABASE_NAME")
username = os.environ.get("DB_USERNAME")
password = os.environ.get("DB_PASSWD")
driver = '{ODBC Driver 17 for SQL Server}'

db_info = 'DRIVER=' + driver + ';SERVER=' + server + ';PORT=1433;DATABASE=' + database + ';UID=' + username + ';PWD=' + password

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

    if len(query_lst) > 0:
        query += " WHERE"

        for i in range(0, len(query_lst), 2):
            if query_lst[i] in dates:
                epoch = get_epoch(query_lst[i + 1][1:])
                query_lst[i + 1] = query_lst[i + 1][0] + str(epoch)
            if query_lst[i] in numbers:
                if query_lst[i + 1][0] == "+":
                    query += " " + query_lst[i] + " >= " + query_lst[i + 1][1:]
                else:
                    query += " " + query_lst[i] + " <= " + query_lst[i + 1][1:]
            else:
                query += " " + query_lst[i] + "=\'" + query_lst[i + 1] + "\'"

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


# #QUERY TESTING
# lst = get_colleges(["national_ranking", "+15", "national_ranking", "-30"])
# for i in lst:
#     print(i)

# GET NAMES TESTING
# names = get_college_names()
# print(names)

#Routes testing for connectivity

# @app.route("/test", methods = ['GET'])
# def test_func():
#     names = get_college_names()
#     return jsonify(names)


@app.route("/")
def my_index():
    return flask.render_template("index.html", token="Hello Flask and React")

# @app.route("/filter", methods = ['POST'])
# def test_filter():
#     #Get the incoming request
#     post_request = request.get_json(force=True)

#     #Assign value from the request
#     array = post_request['Array']
#     filter_by = post_request['Filter']
#     is_descending = post_request['IsDescending']

#     colleges_array = get_colleges(array)

#     return jsonify(get_order(colleges_array, filter_by, is_descending))



# FIREBASE BEGINS HERE
#
#
#
#
#





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

def createUserWithEmailPassword(email, password):
    successfulCreation = True
    try:
        auth.create_user_with_email_and_password(email, password)
        dictio['initialUser'] = email
        db.child("users").child(dictio['initialUser'][:-6]).update({"college": "none"})
    except:
        successfulCreation = False
    return successfulCreation
    # this should redirect to the homepage...


# db.child("users").push({"name": "raj"}) - this is a sample line
# FIXME: a pyrebase token expires after 1 hour, so we need to set a timer and refresh the token every hour
# or tell them that their token will run out
# FIXME: during logout, make sure that the user actually logs out and delete the session
# https://stackoverflow.com/questions/55261682/how-to-know-whether-user-is-logged-in-or-not-in-pyrebase-and-flask


# parameters are Strings for email and password
# return boolean - true if successful login, false if not
@app.route("/login", methods = ['POST'])
def loginWithEmailPassword(email, password):
    successfulLogin = False
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
            successfulLogin = True  # the user isn't logged in, and everything else works
        except:
            return successfulLogin
    return successfulLogin


# deletes the current session - should take them to home page?
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


def addCollege(collegeName):
    colleges = db.child("users").child(dictio['currentUser'][:-6]).get().val()
    colleges[collegeName] = collegeName
    db.child("users").child(dictio['currentUser'][:-6]).update(colleges)


def removeCollege(collegeName):
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


# testing method
if __name__ == '__main__':
    print("im here")
    # createUserWithEmailPassword("aksportsmaniac@gmail.com", "123456")
    loginWithEmailPassword("aksportsmaniac@gmail.com", "123456")
    print(dictio['currentUser'])
    # db.child("users").child(short)
    # print(db.child("users").child(dictio['currentUser'][:-6]).get().val())
    # db.child("users").child(dictio['currentUser'][:-6]).update({"college": "ucsd"})
    # colleges = db.child("users").child(dictio['currentUser'][:-6]).get().val()
    # colleges['ucsb'] = 'ucsb'
    # addCollege('USC')
    # addCollege('University of Southern California')
    # addCollege('University of California, San Diego')
    removeCollege('college')
    listColleges()

    # print(colleges)
    logout()
    if ('usr' in dictio):
        print("something went wrong here")
    else:
        print("good job!")
    print(dictio['currentUser'])

app.run(debug=True)
