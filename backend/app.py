
from flask import Flask, jsonify, request, redirect, render_template, url_for
from flask_cors import CORS
from werkzeug.utils import secure_filename

from dbase.dbase import Database
from queries import (CREATE_DOG_PUBS,
                     INSERT_PUB,
                     SELECT_ALL_PUBS,
                     SELECT_ALL_NAME,
                     SELECT_BY_ID,
                     UPDATE_PUB)

app = Flask(__name__)
CORS(app)

URL = "http://192.168.0.16:5000/"
IMAGES = "static/images/"
FILETYPE = ".jpg"

UPLOAD_FOLDER = "static/images/"

ratings = {"tolerated": 1, "welcomed": 2, "loved": 3}


def set_image_name(name):
    return "".join(name.split()).lower()


def get_db(db_name):
    return Database(db_name)


def build_image_url(image, name):
    if image is None:
        image_url = "".join([URL, IMAGES, set_image_name(name), FILETYPE])
    else:
        image_url = "".join([URL, IMAGES, set_image_name(image), FILETYPE])
    return image_url


def add_pub(db_name, name, location, description, rating, image=None):
    db = get_db(db_name)
    db.execute(CREATE_DOG_PUBS)
    image_url = build_image_url(image, name)
    db.execute(INSERT_PUB, name, location, description, rating, image_url)


def update_pub(db_name, pub_id, name, location, description, rating, image=None):
    db = get_db(db_name)
    image_url = build_image_url(image, name)
    db.execute(UPDATE_PUB, name, location, description, rating, image_url, pub_id);


'''
Top-level edit menu

'''
@app.route('/edit', methods=["GET", "POST"])
def edit():
    if request.method == "POST":
        action = request.form.get("edit")
        if action == "add":
            return redirect(url_for("add"))
        if action == "update":
            return redirect(url_for("update"))
    return render_template("edit.html")


'''
Sub-form for submitting a new pub

'''
@app.route('/add', methods=["GET", "POST"])
def add():
    if request.method == "POST":
        name = None
        location = None
        rating = None
        description = None
        image_name = "placeholder"

        if request.form.get("name"):
            name = request.form.get("name")

        if request.form.get("location"):
            location = request.form.get("location")

        if request.form.get("description"):
            description = request.form.get("description")

        if request.form.get("rating"):
            rating = ratings[request.form.get("rating")]

        #if 'image' in request.files:
        #    image_file = request.files['image']
        #    image_name = set_image_name(name)

        if name and (rating and description):
            add_pub("brumdog.db", name, location, description, rating, image_name)
    return render_template("form.html")


'''
Sub-form for selecting an existing pub to update

'''
@app.route('/update', methods=["GET", "POST"])
def update():
    if request.method == "POST":
        pass
    db = get_db("brumdog.db")
    all_pubs = db.execute(SELECT_ALL_NAME)
    return render_template("edit_list.html", pubs=all_pubs)


'''
Displays the existing pub details in a pre-filled form

'''
@app.route('/pub_details', methods=["POST"])
def pub_details():
    if request.method == "POST":
        pub_id = int(request.form.get("pub_pick"))
        db = get_db("brumdog.db")
        pub_details = db.execute(SELECT_BY_ID, pub_id)[0]
        checked = dict(toleratedchecked="no", welcomedchecked="no", lovedchecked="no")
        if pub_details["rating"] == 1:
            checked["toleratedchecked"] = "checked"
        elif pub_details["rating"] == 2:
            checked["welcomedchecked"] = "checked"
        elif pub_details["rating"] == 3:
            checked["lovedchecked"] = "checked"
        return render_template("form_prefilled.html", **checked, **pub_details)


'''
TODO: Submits updated pub details to the database

'''
@app.route('/update_pub_details', methods=["GET", "POST"])
def update_pub_details():
    if request.method == "POST":
        name = None
        location = None
        rating = None
        description = None
        image_name = "placeholder"
        pub_id = int(request.form.get("pub_id"))

        if request.form.get("name"):
            name = request.form.get("name")

        if request.form.get("location"):
            location = request.form.get("location")

        if request.form.get("description"):
            description = request.form.get("description")

        if request.form.get("rating"):
            rating = ratings[request.form.get("rating")]

        if name and (rating and description):
            update_pub("brumdog.db", pub_id, name, location, description, rating, image_name)
    return redirect(url_for("edit"))


'''
Deals with requests for pub data from the frontend

'''
@app.route('/load', methods=["GET"])
def load():
    db = get_db("brumdog.db")
    pubs = db.execute(SELECT_ALL_PUBS)
    pubs = {pub["id"]: pub for pub in pubs}
    return jsonify(pubs)


@app.route('/populate')
def add_db_pubs():
    add_pub("brumdog.db",
            "Pug-on-Tap",
            "Digbeth",
            "A quaint, old-time boozer where the only thing to fear is the locals",
            1)
    add_pub("brumdog.db",
            "Horse and Hound",
            "Stirchley",
            "Avoid the food, I'm sure your dog will like it though!",
            2)
    return "Done!"
#
#
#@app.route('/show', methods=["GET"])
#def show_db_pubs():
#    db = get_db("brumdog.db")
#    p = db.execute(SELECT_ALL_PUBS)
#    return jsonify(p)


