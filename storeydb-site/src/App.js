import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        storeydb
      </header>
    </div>
  );
}

function getdata(){
  $.get("http://localhost:3333/bigdata", (x)=>{console.log(x); alert(x)});
}

export default App;
