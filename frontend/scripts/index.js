
function x() {
  setTimeout(()=>{
    console.log("lol");
    // $.post("localhost:3333/bob", {"cats": 20, "gophers": 40});
    x();
  }, 1000);
}

x();
