from flask import Flask, render_template

app = Flask(__name__)

@app.route("/login")
def login():
       return render_template("index.html", name_of_lists = ["sam", "francisco", "kartika", "billy", "bob"], my_variable = 5)


@app.route("/")
@app.route("/home")
def home_page():
       return "<p>home</p>"


if __name__ == "__main__":
       app.run(debug=True)