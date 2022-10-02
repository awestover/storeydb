package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"

	"encoding/json"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/bigdata", GetElement)
	r.HandleFunc("/pushElement", PushElement)

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	PORT := "5000"
	fmt.Println("Listening on port " + PORT)
	corsHandler := handlers.CORS(originsOk, headersOk, methodsOk)(r)
	http.ListenAndServe(":"+PORT, corsHandler)
}

func PushElement(w http.ResponseWriter, r *http.Request) {
	eltName := r.URL.Query().Get("name")
	eltDescription := r.URL.Query().Get("description")

	// ElementData{Name: eltName, Description: eltDescription}

	fmt.Println("BEHOLD! a user has submitted a new element")
	fmt.Println(eltName)
	fmt.Println(eltDescription)
}

type ElementData struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

func GetElement(w http.ResponseWriter, r *http.Request) {
	eltType := r.URL.Query().Get("name")

	elts := map[string][]ElementData{}
	filename := "db/elts.json"
	jsonFile, _ := os.Open(filename)
	byteValue, _ := ioutil.ReadAll(jsonFile)
	json.Unmarshal(byteValue, &elts)

	jsonData, _ := json.Marshal(elts[eltType])
	io.WriteString(w, string(jsonData))

	fmt.Println(jsonData)
	fmt.Println(elts)
	fmt.Println("yoyo yo big data")
	fmt.Println(eltType)
}

type StoryData struct {
	Title   string `json:"title"`
	PoV     string `json:"pov"`
	Summary string `json:"summary"`
	Scene   string `json:"scene"`
}
type Stories struct {
	Stories []StoryData `json:"stories"`
}

func getStories(w http.ResponseWriter, r *http.Request) {
	whichStory := r.URL.Query().Get("storyid")

	stories := map[string]Stories{}
	filename := "db/story.json"
	jsonFile, _ := os.Open(filename)
	byteValue, _ := ioutil.ReadAll(jsonFile)
	json.Unmarshal(byteValue, &stories)

	jsondata, _ := json.Marshal(stories[whichStory])
	io.WriteString(w, string(jsondata))

	fmt.Println("STORY TIME")
}
