from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
#  CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/")
def helloWorld():
  return render_template("index.html")

@cross_origin("bob")
def bob():
  return "bob"

if __name__ == "__main__": 
  app.run()

