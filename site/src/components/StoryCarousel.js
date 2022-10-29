import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constants';
import { Box, Typography } from '@mui/material';

export default function StoryCarousel(props) {

  const [bigData, setBigData] = useState(null);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios.get(SERVER_URL+"getStories", {})
      .then(res => {
        setBigData(Object.values(res.data));
      })
  }, [refresh]);

  const updateData = () => {
    setRefresh(!refresh);
  }

  return (
    <>
      { bigData && 
      <Box display="flex" m={3} sx={{width: "60%", overflowX: "scroll", border: "2px solid black"}}> 
        {bigData.map((story)=>
          <Box m={3}>
            <p>{story.title}</p>
            <p>{story.pov}</p>
            <p>{story.summary}</p>
            <p>{story.scene}</p>
          </Box>
        )}
        </Box>
      }
    </>
  );
}


