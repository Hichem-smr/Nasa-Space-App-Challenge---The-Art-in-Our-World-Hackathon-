from db import FirebaseDatabase
from flask import Flask
from flask import request
import socketio
from flask_cors import CORS

sio = socketio.Server()
db = FirebaseDatabase("NazaChallenge2022")
app = Flask(__name__)
CORS(app)

@sio.event
def connect(sid, environ, auth):
    db.join_room(token)
    username = document.get_username_by_token(token)
    sio.emit('player_join', {"username": username}, broadcast=True)

@sio.event
def disconnect(sid):
    db.leave_room(token)

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    print(data)
    return db.add_user(data)

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    return db.login(data)

@app.route("/join", methods=["POST"])
def join():
    token = request.json.get('token')
    db.join_room(token)
    return "done"

@app.route("/leave", methods=["POST"])
def leave():
    token = request.json.get('token')
    db.leave_room(token)
    return "done"
    
if __name__ == "main"
    app.run()