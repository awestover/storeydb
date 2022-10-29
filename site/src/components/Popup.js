import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// import axios from 'axios';
// import { SERVER_URL } from '../constants';
import { EditForm, AddForm } from './Form.js'
import { Button, IconButton } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';
import ControlPointIcon from '@mui/icons-material/ControlPoint';



export const EditPopup = (props) => {
  return ( 
    <Popup trigger={<IconButton size="small" variant="contained" color="success"> <EditIcon/> </IconButton>} modal nested > 
    {close => ( <div className="modal"> <button className="close" onClick={close}> &times; </button> <div className="header"> Edit </div> 
      <div className="content"> 
      <h3>old name: {props.curName}</h3>
      <h3>old description: {props.curDescription}</h3>
      </div> 

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
        <div className="header"> View </div> 
        <div className="content"> 
          <h3>Name: {props.curName}</h3>
          <h3>Description: {props.curDescription}</h3>
        </div> 
      </div> )} 
    </Popup>
  );
}


export const AddPopup = (props) => {
  return ( 
    <Popup trigger={<IconButton color="primary"> <ControlPointIcon sx={{ fontSize: "60px" }}/> </IconButton>} modal nested > 
    { close => ( <div className="modal"> <button className="close" onClick={close}> &times; </button> <div className="header"> ADD </div> <AddForm closefn={close} updateData={props.updateData}></AddForm> </div> ) } 
    </Popup>
  );
}

