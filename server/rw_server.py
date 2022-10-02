from flask import Flask, request
import json
app = Flask(__name__)

where = "db/story.json"

@app.route("/getscene", methods=["GET"])
def get_scene():
  with open(where, 'r') as myfile:
    story_json_data = json.loads(myfile.read())
  try:
    print("requestargs", request.args)
    return story_json_data[request.args["title"]]
  except:
    return "no such scene; maybe you can write one!"

@app.route("/pushscene", methods=["POST"])
def push_scene():
  data = requests.form
  title = data["title"]

  with open(where, 'r') as myfile:
    story_json_data = json.loads(myfile.read())

  story_json_data[title] = data

if __name__ == "__main__":
  app.run(debug=True, host="0.0.0.0")


