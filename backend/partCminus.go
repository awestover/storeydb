package main

import (
  "fmt"
  "io"
  "net/http"
)

func getRoot(w http.ResponseWriter, r *http.Request){
  fmt.Printf("got / request !\n")
  io.WriteString(w, "yo some stuff")
}

func main() {
  http.HandleFunc("/", getRoot)

  http.ListenAndServe(":3333", nil)
}
