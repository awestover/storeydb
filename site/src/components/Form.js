import React, {useState} from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constants';
import { Box, Typography } from '@mui/material';
import ImageCards from './ImageCards';

export const EditForm = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  function editdude(name, description, type) {
    axios.get(SERVER_URL + "pushElement", { 
      params: {
        name: name, 
        description: description, 
        type: type,
        oldName: props.curName,
        oldDescription: props.curDescription
      }})
      .then(res => { 
        props.closefn();

        props.updateData();
        // let pushDude = document.getElementById(res.data.type + "Carousel");
        // let pushStuff = <Box m={3}> <ImageCards name={res.data.name} description={res.data.description}/> </Box> ;
        // let pushStuff = JSON.stringify(res.data);
        // console.log(pushStuff);
        // pushDude.append(pushStuff);
      });
  }

  return (
    <>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input className="form-control" id="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
      </div>
      <div className="form-group">
        <label htmlFor="type">EltType</label>
        <input className="form-control" id="type" 
          value={type}
          onChange={(e) => {setType(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" onClick={() => editdude(name, description, type)}>
          editdude
        </button>
      </div>
    </>
  );
};

export const AddForm = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  function editdude(name, description, type) {
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
    <h1>this form is different. its  all about ADDING</h1>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input className="form-control" id="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
      </div>
      <div className="form-group">
        <label htmlFor="type">EltType</label>
        <input className="form-control" id="type" 
          value={type}
          onChange={(e) => {setType(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" onClick={() => editdude(name, description, type)}>
          editdude
        </button>
      </div>
    </>
  );
};


