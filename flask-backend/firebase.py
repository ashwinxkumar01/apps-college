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
dictio = {}

#parameters are Strings for email and password
#return boolean - true if successful creation, false if not
def createUserWithEmailPassword(email, password):
    successfulCreation = True
    try: 
        auth.create_user_with_email_and_password(email, password)
        dictio['initialUser'] = email
        db.child("users").child(dictio['initialUser'][:-6]).update({"college": "none"})
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
        #print(session['usr']) #if this doesn't error out, that means the user is logged in already
        print(dictio['usr'])
    except KeyError:
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            user = auth.refresh(user['refreshToken'])
            user_id = user['idToken']
            #session['usr'] = user_id
            dictio['usr'] = user_id
            dictio['currentUser'] = email
            successfulLogin = True #the user isn't logged in, and everything else works
        except:
            return successfulLogin
    return successfulLogin


#deletes the current session - should take them to home page?
def logout():
    #session.pop['usr']
    dictio.pop('usr')
    dictio['currentUser'] = 'none'


#returns boolean if user is logged in
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
    ret_list = []
    for name in colleges.values():
        if (name != "none"):
            ret_list.append(name)
    print(ret_list)
    return ret_list

#testing method
if __name__ == '__main__':
    loginWithEmailPassword("aksportsmaniac@gmail.com","123456")
    print(dictio['currentUser'])
    #db.child("users").child(short)
    # print(db.child("users").child(dictio['currentUser'][:-6]).get().val())
    # db.child("users").child(dictio['currentUser'][:-6]).update({"college": "ucsd"})
    # colleges = db.child("users").child(dictio['currentUser'][:-6]).get().val()
    # colleges['ucsb'] = 'ucsb'
    addCollege('south carolina gamecocks')
    removeCollege('college')
    listColleges()

    #print(colleges)
    logout()
    if ('usr' in dictio):
        print("something went wrong here")
    else:
        print("good job!")
    print(dictio['currentUser'])
    
