import requests
import json
SERVER = "http://localhost:5000"
#  SERVER = "http://doranelle.kevinhsu.net:5000"

def getscene(title):
  x = requests.get(f"{SERVER}/getStory", params={"storyid": title})
  return x.content.decode("utf-8")

def pushscene(fname):
  with open(fname, 'r') as myfile:
    story_json_data = json.loads(myfile.read())

  requests.post(f"{SERVER}/pushscene", data=story_json_data)

choice = input("[get]scene/[push]scene\n> ")

if choice == "get":
  title = input("title?\n> ")
  print(getscene(title))
elif choice == "push":
  fname = input("location of file to be pushed?\n>")
  pushscene(fname)
else: 
  raise Exception("i can only get/push scenes. sorry")

