import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Box } from '@mui/material';
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

export default function ImageCards(props) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ width: 250, backgroundColor: "transparent" }}>


      <CardContent>
        <CardMedia
          component="img"
          height="150"
          image="https://images.unsplash.com/photo-1664055258388-6efc6fbe0aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Paella dish"
        />

          <Typography variant="h5" color="white" m={1}>
            { props.name }
          </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <ViewPopup updateData={props.updateData} curName={props.name} curDescription={props.description}/>
          <EditPopup updateData={props.updateData} curName={props.name} curDescription={props.description}/>
        </Box>

        { 
          // <Typography variant="body2" color="text.primary">
          //   { props.description }
          // </Typography>
        }


      </CardContent>


    </Card>
  );
}

