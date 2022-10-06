from flask import Flask, redirect, url_for, request, json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = { "id" : 0, "cameras": {} } 
data_path =  "db.json"