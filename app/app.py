from flask import Flask, render_template, request, redirect, url_for, flash
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)




@app.route("/login", methods=['GET', 'POST'])
def login():
       return render_template("login.html")


@app.route("/")
@app.route("/home")
def home_page():
       return "<p>home</p>"


if __name__ == "__main__":
       app.run(debug=True)