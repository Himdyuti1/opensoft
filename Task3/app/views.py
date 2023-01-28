from app import app
from flask import render_template,request,redirect,make_response
from app.models import db,Note
from collections import deque

#STACK API

stack=deque()

@app.route('/api/push/<value>')
def push(value):
    if value.isdigit:
        val=int(value)
        stack.append(val)
        return make_response(f"{val} is successfully pushed to the stack",200)
    else:
        return make_response("The entered value must be a positive integer",400)

@app.route('/api/pop')
def pop():
    if stack:
        val=stack[-1]
        stack.pop()
        return make_response(f"{val} is successfully popped from the stack",200)
    else:
        return make_response(f"Stack is empty",400)

@app.route('/api/view')
def view():
    if stack:
        return make_response(str(stack),200)
    else:
        return make_response(f"Stack is empty",400)

#note making API

@app.route('/api/note/<text>',methods=["POST","GET","PUT","DELETE"])
def notes(text):

    if request.method=="POST":
        if text.isdigit():
            val=int(text)
            to_add=Note(note=val)
            db.session.add(to_add)
            db.session.commit()
            return make_response(f"{text} is added to the database.",200)
        else:
            return make_response(f"The entered value must be a positive integer.",400)

    if request.method=="GET":
        if text.isdigit():
            id=int(text)
            to_read=Note.query.get(id)
            return make_response(f"{to_read.note} corresponds to ID {text}.",200)
        else:
            return make_response(f"The id must be a positive integer.",400)

    if request.method=="DELETE":
        if text.isdigit():
            id=int(text)
            to_delete=Note.query.get(id)
            if to_delete:
                db.session.delete(to_delete)
                db.session.commit()
                return make_response(f"ID:{text} is deleted successfully.",200)
            else:
                return make_response(f"ID:{text} does not exist.",400)
        else:
            return make_response(f"The id must be a positive integer.",400)

@app.route('/api/note/<id>/<new_value>',methods=["POST","GET","PUT","DELETE"])
def put(id,new_value):

    if request.method=="PUT":
        if id.isdigit() and new_value.isdigit():
            id_to_update=int(id)
            val=int(new_value)
            to_update=Note.query.get(id_to_update)
            if to_update:
                to_update.note=val
                db.session.commit()
                return make_response(f"ID:{id} is updated successfully to {new_value}.",200)
            else:
                return make_response(f"ID:{id} does not exist.",400)
        elif id.isdigit():
            return make_response("The entered value must be a positive integer.",400)
        else:
            return make_response("The id must be a positive integer.",400)