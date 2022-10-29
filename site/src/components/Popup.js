import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// import axios from 'axios';
// import { SERVER_URL } from '../constants';
import { EditForm, AddForm } from './Form.js'
import { Button, IconButton, Typography } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';
import ControlPointIcon from '@mui/icons-material/ControlPoint';



export const EditPopup = (props) => {
  return ( 
    <Popup trigger={<IconButton size="small" variant="contained" color="success"> <EditIcon/> </IconButton>} modal nested > 
    {close => ( <div className="modal"> <button className="close" onClick={close}> &times; </button> 

      <Typography variant="h5"> Edit </Typography>
      <Typography variant="h5"> Old Name: {props.curName} </Typography>
      <Typography variant="h5"> Old Description: {props.curDescription} </Typography>

      <EditForm closefn={close} updateData={props.updateData} curName={props.curName} curDescription={props.curDescription}></EditForm>
      </div> )} 

    </Popup>
  );
}



export const ViewPopup = (props) => {
  return ( 
    <Popup open={props.open} onClose={() => props.setOpen(false)}modal nested > 
    {() => ( 
      <div className="modal"> 
        <button className="close" onClick={() => props.setOpen(false)}> &times; </button> 
        <Typography variant="h5"> View </Typography>
        <Typography variant="h5"> Name: {props.curName} </Typography>
        <Typography variant="h5"> Description: {props.curDescription} </Typography>
      </div> )} 
    </Popup>
  );
}


export const AddPopup = (props) => {
  return ( 
    <Popup trigger={<IconButton color="primary"> <ControlPointIcon sx={{ fontSize: "60px" }}/> </IconButton>} modal nested > 
    { close => ( 
      <div className="modal"> <button className="close" onClick={close}> &times; </button> 
        <Typography variant="h5"> Add </Typography>
        <AddForm closefn={close} updateData={props.updateData}></AddForm> 
      </div> ) } 
    </Popup>
  );
}

