
from flask import Flask, jsonify, request, redirect, render_template, url_for
from flask_cors import CORS
from werkzeug.utils import secure_filename

from dbase.dbase import Database
from queries import (CREATE_DOG_PUBS,
                     INSERT_PUB,
                     SELECT_ALL_PUBS,
                     SELECT_ALL_NAME,
                     SELECT_BY_ID)

app = Flask(__name__)
CORS(app)

URL = "http://127.0.0.1:5000/"
IMAGES = "static/images/"
FILETYPE = ".jpg"

UPLOAD_FOLDER = "static/images/"


ratings = {"tolerated": 1, "welcomed": 2, "loved": 3}


def set_image_name(name):
    return "".join(name.split()).lower()


def get_db(db_name):
    return Database(db_name)


def add_pub(db_name, name, description, rating, image=None):
    db = get_db(db_name)
    db.execute(CREATE_DOG_PUBS)
    if image is None:
        image = "".join([URL, IMAGES, set_image_name(name), FILETYPE])
    else:
        image = "".join([URL, IMAGES, set_image_name(image), FILETYPE])
    db.execute(INSERT_PUB, name, description, rating, image)


@app.route('/')
def index():
    return "Hello, World!"


# top-level edit menu
@app.route('/edit', methods=["GET", "POST"])
def edit():
    if request.method == "POST":
        action = request.form.get("edit")
        if action == "add":
            return redirect(url_for("submit"))
        if action == "update":
            return redirect(url_for("update"))
    return render_template("edit.html")


@app.route('/update', methods=["GET", "POST"])
def update():
    if request.method == "POST":
        pass
    db = get_db("brumdog.db")
    all_pubs = db.execute(SELECT_ALL_NAME)
    return render_template("edit_list.html", pubs=all_pubs)
    #checked = dict(toleratedchecked="no", welcomedchecked="no", lovedchecked="checked")
    #return render_template("form_prefilled.html", **checked)


@app.route('/update_entry', methods=["GET", "POST"])
def update_entry():
    if request.method == "POST":
       print(request.form.get("pub_pick"))
       return redirect(url_for("edit"))
    return redirect(url_for("edit"))


@app.route('/update_details', methods=["POST"])
def update_details():
    if request.method == "POST":
        pub_id = int(request.form.get("pub_pick"))
        db = get_db("brumdog.db")
        pub_details = db.execute(SELECT_BY_ID, pub_id)[0]
        print(pub_details)
        checked = dict(toleratedchecked="no", welcomedchecked="no", lovedchecked="checked")
        #if pub_details.rating == "tolerated":
        #    checked.toleratedchecked = "checked"
        #elif pub_details.rating == "welcomed":
        #    checked.welcomedchecked = "checked"
        #elif pub_details.rating == "loved":
        #    checked.lovedchecked = "checked"
        return render_template("form_prefilled.html", **checked, **pub_details)



@app.route('/submit', methods=["GET", "POST"])
def submit():
    if request.method == "POST":
        name = None
        rating = None
        description = None
        image_name = "placeholder"

        if request.form.get("name"):
            name = request.form.get("name")

        if request.form.get("description"):
            description = request.form.get("description")

        if request.form.get("rating"):
            rating = ratings[request.form.get("rating")]

        #if 'image' in request.files:
        #    image_file = request.files['image']
        #    image_name = set_image_name(name)

        if name and (rating and description):
            add_pub("brumdog.db", name, description, rating, image_name)
    return render_template("form.html")


@app.route('/load', methods=["GET"])
def load():
    db = get_db("brumdog.db")
    pubs = db.execute(SELECT_ALL_PUBS)
    pubs = {pub["id"]: pub for pub in pubs}
    return jsonify(pubs)


#@app.route('/add')
#def add_db_pubs():
#    add_pub("brumdog.db",
#            "Pug-on-Tap",
#            "A quaint, old-time boozer where the only thing to fear is the locals",
#            1)
#    add_pub("brumdog.db",
#            "Horse and Hound",
#            "Avoid the food, I'm sure your dog will like it though!",
#            2)
#    return "Done!"
#
#
#@app.route('/show', methods=["GET"])
#def show_db_pubs():
#    db = get_db("brumdog.db")
#    p = db.execute(SELECT_ALL_PUBS)
#    return jsonify(p)


