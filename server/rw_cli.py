import requests
import json
kevin_server = "doranelle.kevinhsu.net"

def getscene(title):
  requests.get(f"{kevin_server}/getscene", params={"title": title})

def pushscene(fname):
  with open(fname, 'r') as myfile:
    story_json_data = json.loads(myfile.read())

  requests.post(f"{kevin_server}/pushscene", data=story_json_data)

choice = input("[get]scene/[push]scene\n> ")

if choice == "get":
  title = input("title?\n> ")
  getscene(title)
elif choice == "push":
  fname = input("location of file to be pushed?\n>")
  pushscene(fname)
else: 
  raise Exception("i can only get/push scenes. sorry")

