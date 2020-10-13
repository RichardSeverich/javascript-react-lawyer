import axios from 'axios';
import config from "./RequestConfig"
import buildEndpoint from "./RequestEndPoint";

const post = (endpoint, body, callback) => {
  const url = buildEndpoint(endpoint);
  console.log("*** POST REQUEST ***");
  console.log(url);
  console.log(body);
  axios.post(url, body, config)
    .then(response => {
      console.log(response);
      callback(response);
    })
    .catch(error => {
      console.log(error.response);
      callback(error.response);
  })
};

export default post;
