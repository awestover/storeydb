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

type ElementData struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Type        string `json:"type"`
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

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/bigdata", GetElement)
	r.HandleFunc("/pushElement", PushElement)
	r.HandleFunc("/editElement", EditElement)

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	PORT := "5000"
	fmt.Println("Listening on port " + PORT)
	corsHandler := handlers.CORS(originsOk, headersOk, methodsOk)(r)
	http.ListenAndServe(":"+PORT, corsHandler)
}

func ReadFile(filename string) []byte {
	jsonFile, _ := os.Open(filename)
	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	return byteValue
}

func EditElement(w http.ResponseWriter, r *http.Request) {
	eltOldName := r.URL.Query().Get("oldName")
	eltName := r.URL.Query().Get("name")
	eltDescription := r.URL.Query().Get("description")
	eltType := r.URL.Query().Get("type")

	filename := "db/elts.json"
	byteValue := ReadFile(filename)

	elts := map[string][]ElementData{}
	json.Unmarshal(byteValue, &elts)

	for i := len(elts[eltType]) - 1; i >= 0; i++ {
		oldElt := elts[eltType][i]
		if oldElt.Name == eltOldName {
			elts[eltType] = append(elts[eltType][:1], elts[eltType][i+1:]...)
		}
	}

	newElt := ElementData{eltName, eltDescription, eltType}
	elts[eltType] = append(elts[eltType], newElt)

	byteValue, _ = json.MarshalIndent(elts, "", "	")
	_ = ioutil.WriteFile(filename, byteValue, 0644)

	fmt.Println("BEHOLD! a user has edited an old element")
}

func PushElement(w http.ResponseWriter, r *http.Request) {
	eltName := r.URL.Query().Get("name")
	eltDescription := r.URL.Query().Get("description")
	eltType := r.URL.Query().Get("type")

	// ElementData{Name: eltName, Description: eltDescription}
	// open json file, read as bytes, convert to dict
	filename := "db/elts.json"
	byteValue := ReadFile(filename)

	elts := map[string][]ElementData{}
	json.Unmarshal(byteValue, &elts)

	fmt.Println(eltName)
	fmt.Println(eltDescription)
	fmt.Println(eltType)
	fmt.Println(elts)

	if eltType == "" {
		return
	}

	newElt := ElementData{eltName, eltDescription, eltType}
	elts[eltType] = append(elts[eltType], newElt)
	byteValue, _ = json.MarshalIndent(elts, "", "	")
	_ = ioutil.WriteFile(filename, byteValue, 0644)

	jsonData, _ := json.Marshal(newElt)
	io.WriteString(w, string(jsonData))

	fmt.Println(newElt)
	fmt.Println("BEHOLD! a user has submitted a new element")
}

func GetElement(w http.ResponseWriter, r *http.Request) {
	eltType := r.URL.Query().Get("name")

	// open json file, read as bytes, convert to dict
	filename := "db/elts.json"
	byteValue := ReadFile(filename)
	elts := map[string][]ElementData{}
	json.Unmarshal(byteValue, &elts)

	// convert from dict to json
	jsonData, _ := json.Marshal(elts[eltType])
	io.WriteString(w, string(jsonData))

	// fmt.Println(jsonData)
	// fmt.Println(elts)
	// fmt.Println("yoyo yo big data")
	// fmt.Println(eltType)
}

func getStories(w http.ResponseWriter, r *http.Request) {
	whichStory := r.URL.Query().Get("storyid")

	stories := map[string]Stories{}
	filename := "db/story.json"
	jsonFile, _ := os.Open(filename)
	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)
	json.Unmarshal(byteValue, &stories)

	jsondata, _ := json.Marshal(stories[whichStory])
	io.WriteString(w, string(jsondata))

	// fmt.Println("STORY TIME")
}
