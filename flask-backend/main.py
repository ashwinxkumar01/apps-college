import flask
import pyrebase
import os
from flask import session


app = flask.Flask("__main__")
app.secret_key = os.urandom(24) #do we need this? read it somewhere, could possibly be helpful



@app.route("/")
def my_index():
    return flask.render_template("index.html", token="Hello Flask and React")


app.run(debug=True)

