from flask import Flask, render_template, request
from contacts_model import Contact

Contact.load_db()

app: Flask = Flask(__name__)

app.secret_key = b"it is over"


@app.route("/")
def index() -> str:
    return render_template("index.html")


@app.route("/contacts-partial")
def contacts_partial() -> str:
    contacts_set = Contact.all()
    return render_template("partial.html", contacts=contacts_set)


@app.route("/contacts-demo")
def contacts_demo() -> str:
    return "You got rizz!"


@app.route("/contacts", methods=["GET", "POST"])
def contacts() -> str:
    search: str | None = request.form.get("q")
    print(search)
    if search is not None:
        contacts_set: list = Contact.search(search)
    else:
        contacts_set = Contact.all()
    return render_template("partial.html", contacts=contacts_set)


@app.route("/contacts-test", methods=["GET"])
def contacts_test() -> str:
    search: str | None = request.args.get("q")
    if search is not None:
        contacts_set: list = Contact.search(search)
    else:
        contacts_set = Contact.all()
    return render_template("partial.html", contacts=contacts_set)


if __name__ == "__main__":
    app.run(port=8000, debug=True)
