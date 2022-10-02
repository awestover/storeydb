import React, {useState} from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constants';

export const Form = () => {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  function submitdude(name, description, type) {
    // axios.get(SERVER_URL + "pushElement", { params: {name: "yetiyeti", description: "im very big and stuff", type: "character"}})
    axios.get(SERVER_URL + "pushElement", { 
      params: {
        name: name, 
        description: description, 
        type: type}})
      .then(res => { 
        alert(JSON.stringify(res.data)); 
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
        <button className="form-control btn btn-primary" onClick={() => submitdude(name, description, type)}>
          Submit
        </button>
      </div>
    </>
  );
};
export default Form;

