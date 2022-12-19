import json
import firebase_admin

from firebase_admin import credentials
from firebase_admin import auth
from firebase_admin import firestore
import bcrypt

import jwt

cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()


class FirebaseDatabase:
    def __init__(self, secret):
        self.secret = secret

    def add_user(self, data):
        (res, message) = self.check_empty_group(data)
        if res:
            return ({
                "status": "error",
                "message": message
            }, 422)
        
        salt = bcrypt.gensalt()
        data["password"] = bcrypt.hashpw(data['password'].encode('utf-8'), salt)
        try:
            new_user = db.collection(u'users').add(data)
            jwt_encode = jwt.encode({"id": new_user[1].id}, self.secret)

            return ({
                "status": "success",
                "token": jwt_encode
            }, 200)
        except Exception as e:
            return ({
                "status": "error",
                "message": str(e)
            }, 422)

    def check_empty_group(self, data):
        for k, v in data.items():
            (res, message) = self.empty(v)
            if res:
                return(
                    res,
                    message
                )
        
        return(
            False, 
            ""
        )

    def empty(self, element, name=""): 
        return (
            len(element) == 0,
            f"{name} is a required field"
        )

    def login(self, data):
        (res, message) = self.check_empty_group(data)
        if res:
            return ({
                "status": "error",
                "message": message
            }, 422)
        user = self.get_user_by_email(data['email']) 
        if user is None:
            return generate_error(404, "Wrong username or password")

        if(bcrypt.checkpw(data['password'].encode('utf-8'), user['password'])):
            return self.generate_token({"id": user['id']})
        else:
            return self.generate_error(422, "Wrong username or password")
        
    def get_user_by_email(self, email):
        users_ref = db.collection(u'users')
        docs = users_ref.where(u'email', u'==', email).stream()
        for doc in docs:
            usr = doc.to_dict()
            usr['id'] = doc.id
            return usr
    
    def get_username_by_token(self, token):
        id = self.decode_token(token)
        doc = db.collection(u'users').document(id).get()
        return doc.to_dict()['username']
    
    def generate_error(self, status, message):
        return (
            {
                "status": "error",
                "message": message
            },
            status
        )

    def generate_success(self, status, message):
        return(
            {
                "status": "success",
                "message": message
            },
            status
        )

    def generate_token(self, data):
        jwt_encode = jwt.encode(data, self.secret, algorithm="HS256")
        return(
            {
                "status": "success",
                "token": jwt_encode
            },
            200
        )

    def decode_token(self, token):
        return jwt.decode(token, self.secret, algorithms=['HS256'])
    
    def join_room(self, token):
        decode_token = self.decode_token(token)
        room_id = self.get_available_room_id()
        doc = db.collection(u'rooms').document(room_id).get()
        if decode_token in doc['players']:
            return doc['player_number']

        if room_id is None:
            db.collection(u'rooms').add({
                u"players": [decode_token],
                u"player_number": 1
            })[1].id
        else:
            room = db.collection(u'rooms').document(room_id)
            room.update({
                u'players': firestore.ArrayUnion([decode_token]),
                u'player_number': firestore.Increment(1)
            })
        
        doc = db.collection(u'rooms').document(room_id).get()
        return doc["player_number"]

    def leave_room(self, token):
        decode_token = self.decode_token(token)
        room_id = self.get_room_by_user_id(decode_token)
        
        db.collection(u'rooms').document(room_id).update({
            u"players": firestore.ArrayRemove([decode_token]),
            u"player_number": firestore.Increment(-1)
        })

        doc = db.collection(u'rooms').document(room_id).get()
        if doc.to_dict()["player_number"] == 0:
            db.collection(u'rooms').document(room_id).delete()
            return 0
        
        return doc["player_number"]

    def get_room_by_user_id(self, id):
        rooms_ref = db.collection(u'rooms')
        docs = rooms_ref.where(u'players', u'array_contains', id).stream()
        for doc in docs:
            return doc.id

    def get_available_room_id(self):
        rooms_ref = db.collection(u'rooms')
        docs = rooms_ref.where(u'player_number', u'<', 5).stream()
        for doc in docs:
            return doc.id
        
        return None