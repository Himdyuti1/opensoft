from app import app

from flask import render_template,request,redirect

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/sign-up", methods=["GET","POST"])
def sign_up():

    if request.method=="POST":
        req=request.form
        username=req["firstName"]
        username+=" "
        username+=req["secondName"]
        contact=req["phoneNo"]
        email=req["email"]
        password=req["password"]
        gender=req["Gender"]

        print(f"Name: {username}, Contact: {contact}, E-mail: {email}, Password: {password}, Gender: {gender}")
        return redirect(request.url)

    return render_template("sign_up.html")