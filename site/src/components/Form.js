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
    axios.get(SERVER_URL + "editElement", { 
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

  function adddude(name, description, type) {
    alert(name);
    alert(description);
    axios.get(SERVER_URL + "pushElement", { 
      params: {
        name: name, 
        description: description, 
        type: type}})
      .then(res => { 
        props.closefn();
        props.updateData();
      });
  }

  return (
    <>
    <h4>this form is different. its  all about ADDING</h4>

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
        <button className="form-control btn btn-primary" onClick={() => adddude(name, description, type)}>
          addform
        </button>
      </div>
    </>
  );
};


