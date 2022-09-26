package main

import (
	"fmt"
	"net/http"
  "io"

  "encoding/json"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", HomeHandler)
	r.HandleFunc("/stories", StoriesHandler)
	r.HandleFunc("/bigdata", getJsonthing)

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	PORT := "5000"
	fmt.Println("Listening on port " + PORT)

	corsHandler := handlers.CORS(originsOk, headersOk, methodsOk)(r)

	http.ListenAndServe(":"+PORT, corsHandler)
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Category: %v\n", vars["category"])
}

func StoriesHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Category: %v\n", vars["category"])
}

type CharacterData struct {
  Name string `json:"name"`
  Bio string  `json:"bio"`
}

func getJsonthing(w http.ResponseWriter, r *http.Request){
  // todo: read this from a db
  characters := [5]CharacterData{}
  characters[0] = CharacterData{Name: "Bob", Bio:"he is a really stsrong dude"}
  characters[1] = CharacterData{Name: "Kevin", Bio: "he is a wizard. magical powers include insane coding skillz"}
  characters[2] = CharacterData{Name: "jumpydude", Bio: "he is a nice guy. "}
  characters[3] = CharacterData{Name: "theland dog", Bio: "he eats grass"}
  characters[4] = CharacterData{Name: "dragon thing", Bio: "he someitmes likes to eat pizza"}

  jsonData, _ := json.Marshal(characters)

  fmt.Println("yoyo yo big data")
  io.WriteString(w, string(jsonData))
}

