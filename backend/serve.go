package main

import (
	"fmt"
	"io"
	"net/http"
  "encoding/json"
	// "errors"
	// "os"
)

func enableCors(w *http.ResponseWriter) {
(*w).Header().Set("Access-Control-Allow-Origin", "*")
// (*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
}

func getRoot(w http.ResponseWriter, r *http.Request) {
  enableCors(&w)
	fmt.Printf("got / request\n")
	io.WriteString(w, "This is my website!\n")
}
func getHello(w http.ResponseWriter, r *http.Request) {
  enableCors(&w)
	fmt.Printf("got /hello request\n")
	io.WriteString(w, "Hello, HTTP!\n")
}

func getJsonthing(w http.ResponseWriter, r *http.Request){
  enableCors(&w)
	data := map[string]interface{}{
		"intValue":    1234,
		"boolValue":   true,
		"stringValue": "hello!",
		"objectValue": map[string]interface{}{
			"arrayValue": []int{1, 2, 3, 4},
		},
	}
  jsonData, _ := json.Marshal(data)
  fmt.Println("yoyo yo big data")
  io.WriteString(w, string(jsonData))
}

func main() {
	http.HandleFunc("/", getRoot)
	http.HandleFunc("/hello", getHello)
	http.HandleFunc("/bigdata", getJsonthing)

	http.ListenAndServe(":3333", nil)

}

