from flask import Flask, render_template, request, redirect, url_for, flash
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

@app.route("/")
@app.route("/login")
def login():
       return render_template("login.html")


@app.route("/calculator")
def calculator_page():
    return render_template('calculator.html')

@app.route("/terms")
def terms_and_conditions():
    return render_template('terms.html')

@app.route("/feedback")
def feedback():
    return render_template('feedback.html')

@app.route("/feedback/submit")
def feedback():
    return render_template('feedback_submission.html')

if __name__ == "__main__":
       app.run(debug=True)  