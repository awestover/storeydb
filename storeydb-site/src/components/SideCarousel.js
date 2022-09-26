import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constants';

import { Box } from '@mui/material';

import ImageCards from './ImageCards';

function SideCarousel(props) {

  const [characters, setCharacters] = useState(["Bob", "Bucky", "hello"]);

  useEffect(() => {
    axios.get(SERVER_URL + "bigdata/")
      .then(res => {
        const data = res.data;
        this.setCharacters(data.characters);
      })
  }, []);

  return (
    <>
      <Box display="flex">
        { characters.map((character) => 
          <Box m={3}>
            <ImageCards name={character}/>
          </Box>
        ) }
      </Box>
    </>
  );

}


export default SideCarousel;


