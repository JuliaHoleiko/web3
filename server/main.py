from flask import Flask
import mysql.connector
from flask_cors import CORS

db = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='770519jkm'
)
cursor = db.cursor()
cursor.execute('USE web;')
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def get():
    cursor.execute('SELECT * FROM cameras;')
    return {'cameras': cursor.fetchall()}


@app.route('/<string:sort_by>/<string:sort_order>', methods=['GET'])
def get_items(sort_by: str, sort_order: str):
    cursor.execute('SELECT * FROM cameras;')
    cameras = cursor.fetchall()
    if(sort_by=='no'):
        return {'cameras': cameras}
    elif(sort_by == 'zoom'):
        cameras.sort(key=lambda element: element[4], reverse=sort_order == 'descending')
        return {'cameras': cameras}

    elif(sort_by == 'price'):
        cameras.sort(key=lambda element: element[2], reverse=sort_order == 'descending')
        return {'cameras': cameras}
    
  

if __name__ == '__main__':
    app.run(debug=True)