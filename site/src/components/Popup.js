import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// import axios from 'axios';
// import { SERVER_URL } from '../constants';
import { EditForm, AddForm} from './Form.js'

export const EditPopup = (props) => {
  return ( 
    <Popup trigger={<button className="button"> EDIT </button>} modal nested > 
    {close => ( <div className="modal"> <button className="close" onClick={close}> &times; </button> <div className="header"> Modal Title </div> 

      <div className="content"> 
      Lorem ipsum dolor sit amet consectetur aEDIT EDIT EDIT****dipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos? <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? </div> 

      <EditForm closefn={close} updateData={props.updateData} curName={props.curName} curDescription={props.curDescription}></EditForm>

      <div className="actions"> <button className="button" onClick={() => { console.log('modal closed '); close(); }} > close modal </button> </div> 

      </div> )} 

    </Popup>
  );
}


export const AddPopup = (props) => {
  return ( 
    <Popup trigger={<button className="button"> ADD </button>} modal nested > 
    {close => ( <div className="modal"> <button className="close" onClick={close}> &times; </button> <div className="header"> Modal Title </div> 

      <div className="content"> BRO IM adding </div> 

      <AddForm closefn={close} updateData={props.updateData}></AddForm>

      <div className="actions"> <button className="button" onClick={() => { console.log('modal closed '); close(); }} > close modal </button> </div> 

      </div> )} 

    </Popup>
  );
}

