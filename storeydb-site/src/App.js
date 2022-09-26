import './App.css';

import SideCarousel from './components/SideCarousel';

function App() {


  // lol i couldnt figure out jquery so i do this
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:5000/bigdata");
  xhr.send();
  xhr.onload = () => {console.log(xhr.responseText); alert(xhr.responseText)} ;

  return (
    <div className="App">
      <header className="App-header">

        storeydb

        <SideCarousel/>
      </header>
    </div>
  );
}

export default App;
