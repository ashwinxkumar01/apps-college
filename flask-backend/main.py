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

    if len(query_lst) == 0:
        return query

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


# @app.route("/")
# def my_index():
#     return flask.render_template("index.html", token="Hello Flask and React")

# @app.route("/filter", methods = ['POST'])
# def test_filter():
#     p = request.json
#     print(p)
#     print(get_colleges(p))
#     return jsonify(get_colleges(p))


app.run(debug=True)
