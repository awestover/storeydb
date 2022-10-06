import './App.css';

import SideCarousel from './components/SideCarousel';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <header className="App-header">
        <SideCarousel contentType="character" id="characterCarousel"/>
        <SideCarousel contentType="location"  id="locationCarousel"/>
        <SideCarousel contentType="item"      id="itemCarousel"/>
      </header>

    </div>
  );
}

export default App;
