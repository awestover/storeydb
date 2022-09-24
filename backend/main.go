package main

import (
   // "io/ioutil"
   "log"
   "net/http"
   "fmt"
)

func main(){
resp, err := http.Get("https://jsonplaceholder.typicode.com/posts/1")
if err != nil {
   log.Fatalln(err)
}

fmt.Print(resp)

fmt.Print("bob")
}

