
from flask import Flask, redirect, url_for, request, json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = { "id" : 0, "cameras": {} } 
data_path =  "db.json"

def update_data():
    global data
    with open(data_path, 'w') as f:
        json.dump(data, f)

def read_data():
    global data
    with open(data_path, 'r') as f:
        data = json.load(f)

@app.route('/items', methods=['GET'])
def get_all_cameras():
    data_dict = data["cameras"]

    return data_dict


@app.route('/items', methods=['POST'])
def post_camera():
    new_parking = request.json
    new_id = data["id"]
    data["id"] += 1
    data["cameras"][str(new_id)] = new_parking
    update_data()
    return 'OK'

@app.route('/items/<id>', methods=['PATCH'])
def edit_camera(id):
    data_dict = data["cameras"]
    data_dict[id] = request.json
    update_data()
    return 'OK'

@app.route('/items/<id>', methods=['DELETE'])
def delete_camera(id):
    data_dict = data["cameras"]
    del data_dict[id]
    update_data()
    return 'OK'


@app.route('/rr')
def hello_world():
    return 'Hello World!rrr '

@app.route('/')
def hello_world_new():
    return 'Hello World!5000 '

if __name__ == '__main__':
    
    if not os.path.exists(data_path):
        update_data()
    else:
        read_data()

    app.run(debug=True)