import './App.css';

import SideCarousel from './components/SideCarousel';
import AppHeader from './components/AppHeader';
import MyPopup from './components/Popup';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <header className="App-header">
        <SideCarousel contentType="character"/>
        <SideCarousel contentType="location"/>
        <SideCarousel contentType="item"/>
      </header>

      <MyPopup/>
    </div>
  );
}

export default App;
