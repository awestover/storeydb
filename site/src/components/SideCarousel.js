import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constants';

import { Box, Typography } from '@mui/material';

import ImageCards from './ImageCards';

function SideCarousel(props) {

  const [bigData, setBigData] = useState(null);
  let dataDudes = null;
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    console.log(props.contentType);
    axios.get(SERVER_URL + "bigdata", { params: {name: props.contentType}})
      .then(res => {
        const data = res.data;
        setBigData(res.data);
        dataDudes = res.data;
        console.log(JSON.stringify(res.data));
      })
  }, [refresh]);

  const updateData = () => {
    setRefresh(!refresh);
  }

  return (
    <>
      { bigData && 
      <Box id={props.id} display="flex" m={3} sx={{width: "60%", overflowX: "scroll", border: "2px solid black"}}>

        <Typography variant="h5"> { props.contentType } </Typography>

          { bigData.map((character) => 
          <Box m={3}>
            <ImageCards name={character.name} description={character.description} updateData={setRefresh}/>
          </Box>
          ) }
        </Box>
      }
    </>
  );
}

export default SideCarousel;

