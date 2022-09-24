package main

import (
	// "errors"
	"fmt"
	"io"
	"net/http"
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

func main() {
	http.HandleFunc("/", getRoot)
	http.HandleFunc("/hello", getHello)

	http.ListenAndServe(":3333", nil)

}

