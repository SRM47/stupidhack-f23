from flask import Flask, render_template

app = Flask(__name__)

@app.route("/login")
def login():
       # return render_template("index.html", name_of_lists = ["sam", "francisco", "kartika", "billy", "bob"], my_variable = 5)
       return render_template("login.html")


@app.route("/")
@app.route("/home")
def calculator_page():
    return render_template('calculator.html')


if __name__ == "__main__":
       app.run(debug=True)  