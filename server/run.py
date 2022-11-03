from flask import Flask # include the flask library 

app = Flask(__name__) 

@app.route("/") 
def index(): 
   return "Hello, World!" 

if __name__ == '__main__': 
   app.run(debug=True)