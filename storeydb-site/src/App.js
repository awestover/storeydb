import './App.css';

import SideCarousel from './components/SideCarousel';
import AppHeader from './components/AppHeader';

function App() {


  // lol i couldnt figure out jquery so i do this
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:5000/bigdata");
  xhr.send();
  xhr.onload = () => {console.log(xhr.responseText); alert(xhr.responseText)} ;

  return (
    <div className="App">
      <AppHeader/>
      <header className="App-header">
        <SideCarousel/>
      </header>
    </div>
  );
}

export default App;
