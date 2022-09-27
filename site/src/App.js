import './App.css';

import SideCarousel from './components/SideCarousel';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <header className="App-header">
        <SideCarousel contentType="character"/>
        <SideCarousel contentType="location"/>
        <SideCarousel contentType="item"/>
      </header>

    </div>
  );
}

export default App;
