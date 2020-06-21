# apps-college
Streamlined college apps


Installation Instructions (for Mac): 
1. Ensure a Python 3 interpreter with pip is installed
2. Install Python dependencies:
    a. pip install flask
    b. pip install pyrebase
    c. pip install pyodbc
    d. pip install flask_cors
3. Ensure Homebrew is installed (if not, install it)
4. Run the following commands:
    a. /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    b. brew tap microsoft/mssql-release https://github.com/Microsoft/homebrew-mssql-release
    c. brew update
    d. HOMEBREW_NO_ENV_FILTERING=1 ACCEPT_EULA=Y brew install msodbcsql17 mssql-tools
5. Ensure that all of the React dependencies are installed, and the application is now ready to run.

In order to run this app, cd to react-frontend and call npm run build.
Then, navigate to flask-backend and run python3 main.py.

Ensure that:
1. npm install 
2. npm install react-router-dom
3. yarn add @material-ui/core
4. yarn add @material-ui/icons
5. npm install react-bootstrap
6. npm install @fortawesome/react-fontawesome
7. yarn add @material-ui/styles
8. npm install react-perfect-scrollbar
9. npm install react-select
10. npm install react-icons

are executed in the react-frontend folder beforehand. 

For Python:
1. pip install flask
2. pip install pyrebase
3. pip install pyodbc
4. (For Mac) pip install homebrew (Gdog don't worry about it)

Install the ODBC Driver 17 to run the backend Database.

An alternative method to running the app is calling npm start from the react-frontend folder, however, this will not integrate with the backend.
