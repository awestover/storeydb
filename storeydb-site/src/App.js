import './App.css';

import SideCarousel from './components/SideCarousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        storeydb

        <SideCarousel/>
      </header>
    </div>
  );
}

function getdata(){
  $.get("http://localhost:3333/bigdata", (x)=>{console.log(x); alert(x)});
}

export default App;
