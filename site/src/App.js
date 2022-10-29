import './App.css';

import SideCarousel from './components/SideCarousel';
import StoryCarousel from './components/StoryCarousel';
import AppHeader from './components/AppHeader';

import { Typography, Box } from '@mui/material'
import logo from './images/logo.jpg'

export default function App() {
  return (
    <div className="App">
      <AppHeader/>

      <Box sx={{ mt: 10 }}>
        <img height={400} src={logo} alt="Logo" />
        <Typography variant="h2" color="primary"> StoreyDB</Typography>
        <Typography variant="h6" color="primary"> Created by Alek Westover and Kevin Hsu</Typography>
      </Box>

      <header className="App-header">
        <SideCarousel contentType="character" id="characterCarousel"/>
        <SideCarousel contentType="location"  id="locationCarousel"/>
        <SideCarousel contentType="item"      id="itemCarousel"/>
        <StoryCarousel />
      </header>
    </div>
  );
}

