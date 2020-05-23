import flask
import pyrebase
import os
from flask import session
from sql_helpers import *
import pyodbc
from firebase import *

app = flask.Flask(__name__)

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


# #QUERY TESTING
# lst = get_colleges(["national_ranking", "+15", "national_ranking", "-30"])





@app.route("/")
def my_index():
    return flask.render_template("index.html", token="Hello Flask and React")


app.run(debug=True)
