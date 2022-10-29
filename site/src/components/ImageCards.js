import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Box, CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { EditPopup, ViewPopup } from './Popup.js'

const IMGS = ['shark3.png', 'bear4.png', 'rooster1.png', 'squid3.png', 'dog2.png', 'shark4.png', 'dragon1.png', 'bg.png', 'dino1.png', 'bear2.png', 'shark1.png', 'squid4.png', 'chicken1.png', 'sheep3.png', 'sheep2.png', 'squid1.png', 'narwhal2.png', 'fly1.png', 'dog4.png', 'shark2.png', 'pie1.png', 'dragon4.png', 'hawaiianPizza1.png', 'logo.png', 'squid2.png', 'narwhal1.png', 'crab1.png', 'butterfly1.png', 'sheep1.png', 'pizza1.png', 'dragon3.png', 'sheep4.png', 'cake1.png', 'dog3.png', 'narwhal4.png', 'bear3.png', 'squirrel1.png', 'butterfly3.png', 'butterfly4.png', 'butterfly2.png', 'dog1.png', 'dragon2.png', 'balrog1.png', 'bear1.png', 'narwhal3.png'];


export default function ImageCards(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [viewOpen, setViewOpen] = React.useState(false);

  function randImg(){
    return "pictures/" + IMGS[Math.round(Math.random()*IMGS.length)];
  }

  return (
    <Card sx={{ width: 200, backgroundColor: "transparent" }}>

      <CardContent>
        <CardActionArea onClick={() => setViewOpen(true)}>
          <CardMedia
            component="img"
            height="100"
            image={randImg()}
            alt="nice picture"
          />
        </CardActionArea>

        <Box display="flex" justifyContent="center" gap={1} m={1}>
          <Typography variant="h5" color="white">
            { props.name }
          </Typography>
          <EditPopup updateData={props.updateData} curName={props.name} curDescription={props.description}/>
        </Box>

          <ViewPopup updateData={props.updateData} curName={props.name} curDescription={props.description} open={viewOpen} setOpen={setViewOpen}/>
        { 
          // <Typography variant="body2" color="text.primary">
          //   { props.description }
          // </Typography>
        }


      </CardContent>


    </Card>
  );
}

// <CardMedia
//   component="img"
//   height="150"
//   image="https://images.unsplash.com/photo-1664055258388-6efc6fbe0aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//   alt="Paella dish"
// />
