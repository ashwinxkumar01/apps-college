import pyrebase
import os
from flask import session
import pyodbc


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

#parameters are Strings for email and password
#return boolean - true if successful creation, false if not
def createUserWithEmailPassword(email, password):
    successfulCreation = True
    try: 
        auth.create_user_with_email_and_password(email, password)
    except:
        successfulCreation = False
    return successfulCreation
    #this should redirect to the homepage...


#db.child("users").push({"name": "raj"}) - this is a sample line
#FIXME: a pyrebase token expires after 1 hour, so we need to set a timer and refresh the token every hour
#or tell them that their token will run out
#FIXME: during logout, make sure that the user actually logs out and delete the session
#https://stackoverflow.com/questions/55261682/how-to-know-whether-user-is-logged-in-or-not-in-pyrebase-and-flask


#parameters are Strings for email and password
#return boolean - true if successful login, false if not
def loginWithEmailPassword(email, password):
    successfulLogin = False
    try:
        print(session['usr']) #if this doesn't error out, that means the user is logged in already
    except KeyError:
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            user = auth.refresh(user['refreshToken'])
            user_id = user['idToken']
            session['usr'] = user_id
            successfulLogin = True #the user isn't logged in, and everything else works
        except:
            return successfulLogin
    return successfulLogin

#returns boolean if user is logged in
def isLoggedIn():
    isLoggedIn = True
    try:
        print(session['usr'])
    except:
        isLoggedIn = False
    return isLoggedIn

if __name__ == '__main__':
    createUserWithEmailPassword("aksportsmaniac@gmail.com", "yoloswag120")