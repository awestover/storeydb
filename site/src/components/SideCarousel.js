import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constants';

import { Box, Typography } from '@mui/material';

import ImageCards from './ImageCards';
import {AddPopup} from './Popup.js'

function SideCarousel(props) {

  const [bigData, setBigData] = useState(null);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    console.log(props.contentType);
    axios.get(SERVER_URL + "bigdata", { params: {name: props.contentType}})
      .then(res => {
        setBigData(res.data);
      })
  }, [refresh]);

  const updateData = () => {
    setRefresh(!refresh);
  }

  function newdude(name, description, type) {
    alert(name);
    alert(description);
    axios.get(SERVER_URL + "pushElement", { 
      params: {
        name: name, 
        description: description, 
        type: type}})
      .then(res => { 
        props.closefn();
        let pushDude = document.getElementById(res.data.type + "Carousel");
        // let pushStuff = <Box m={3}> <ImageCards name={res.data.name} description={res.data.description}/> </Box> ;
        let pushStuff = JSON.stringify(res.data);
        console.log(pushStuff);
        pushDude.append(pushStuff);
      });
  }

  return (
    <>
      { bigData && 
      <Box id={props.id} display="flex" m={1} sx={{width: "80%", overflowX: "scroll"}}>

        <Typography variant="h5"> { props.contentType } </Typography>
        <AddPopup updateData={updateData}/>

          { bigData.map((character, i) => 
          <Box m={3} key={i}>
            <ImageCards name={character.name} description={character.description} updateData={setRefresh}/>
          </Box>
          ) }
        </Box>
      }

    </>
  );
}

export default SideCarousel;

