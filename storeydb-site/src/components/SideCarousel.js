import * as React from 'react';

import { Box } from '@mui/material';


import ImageCards from './ImageCards';

function SideCarousel(props) {

  const characters = ["Bob", "Bucky", "hello"];

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


