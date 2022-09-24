from flask import Flask

app = Flask(__name__)
@app.route("/getdb")
@app.route("/pushdb")

# wait how do I connect to mongoDB?

app.run()
