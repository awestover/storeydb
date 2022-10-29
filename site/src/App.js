import './App.css';

import SideCarousel from './components/SideCarousel';
import StoryCarousel from './components/StoryCarousel';
import AppHeader from './components/AppHeader';

export default function App() {
  return (
    <div className="App">
      <AppHeader/>
      <header className="App-header">
        <SideCarousel contentType="character" id="characterCarousel"/>
        <SideCarousel contentType="location"  id="locationCarousel"/>
        <SideCarousel contentType="item"      id="itemCarousel"/>
        <StoryCarousel />
      </header>
    </div>
  );
}

