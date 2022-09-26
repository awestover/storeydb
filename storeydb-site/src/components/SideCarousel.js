import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constants';

import { Box } from '@mui/material';

import ImageCards from './ImageCards';

function SideCarousel(props) {

  const [bigData, setBigData] = useState(null);

  useEffect(() => {
    console.log(props.contentType);
    axios.get(SERVER_URL + "bigdata")
      .then(res => {
        const data = res.data;
        setBigData(res.data);
        console.log(JSON.stringify(res.data))
      })
  }, []);

  return (
    <>

      { bigData && 
        <Box display="flex">
          { bigData.map((character) => 
          <Box m={3}>
            <ImageCards name={character.name} bio={character.bio}/>
          </Box>
          ) }
        </Box>
      }
    </>
  );

}


export default SideCarousel;


