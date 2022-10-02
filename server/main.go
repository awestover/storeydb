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

	elt := [4]ElementData{}

	// todo: read this from a db
	if eltType == "character" {
		elt[0] = ElementData{Name: "Bob", Description: "he is a really stsrong dude"}
		elt[1] = ElementData{Name: "Kevin", Description: "he is a wizard. magical powers include insane coding skillz"}
		elt[2] = ElementData{Name: "jumpydude", Description: "he is a nice guy. "}
		elt[3] = ElementData{Name: "theland dog", Description: "he eats grass"}
		jsonData, _ := json.Marshal(elt)
		io.WriteString(w, string(jsonData))
	} else if eltType == "location" {
		elt := [2]ElementData{}
		elt[0] = ElementData{Name: "narnia", Description: "this is a nice place"}
		elt[1] = ElementData{Name: "skadrial", Description: "so cold"}
		jsonData, _ := json.Marshal(elt)
		io.WriteString(w, string(jsonData))
	} else {
		elt := [2]ElementData{}
		elt[0] = ElementData{Name: "rip", Description: "asddffasjdlkffasdff"}
		elt[1] = ElementData{Name: "asdff", Description: "asdff"}
		jsonData, _ := json.Marshal(elt)
		io.WriteString(w, string(jsonData))
	}

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

	// byteValue, _ := ioutil.ReadAll("db/elts.json")
	jsonFile, _ := os.Open("db/story.json")

	byteValue, _ := ioutil.ReadAll(jsonFile)

	stories := map[string]Stories{}
	json.Unmarshal(byteValue, &stories)

	// s1 := StoryData{
	//   Title:   "intro",
	//   PoV:     "kevin",
	//   Summary: "kevin makes a really cool webapp",
	//   Scene:   " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "}

	// s2 := StoryData{Title: "funnytitle", PoV: "alek", Summary: "alek does his math homework", Scene: "once upon a time there was a priority queue in the RAM model that supported insert decrease key and delete min opperations in log log u time where u is the set of possible keys"}

	jsondata, _ := json.Marshal(stories[whichStory])
	io.WriteString(w, string(jsondata))

	fmt.Println("STORY TIME")
}
