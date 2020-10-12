import axios from 'axios';
import buildEndpoint from "./RequestEndPoint";

const post = (endpoint, body, callback) => {
  const url = buildEndpoint(endpoint);
  axios.post(url, body)
    .then(response => {
      callback(response);
    })
    .catch(error => {
      callback(error)
  })
};

export default post;
