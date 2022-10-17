import axios from 'axios';
import { SERVER_URL } from '../constants';

export default function Stories(props) {
  function getem(){
    axios.get(SERVER_URL+"getStories", {})
      .then(res => {
        document.getElementById("stories").innerHTML = JSON.stringify(res);
      })
  }

  getem();

  return (
    <>
    <h1>stories</h1>
    <p id="stories">
    </p>
    </>
  );
}

