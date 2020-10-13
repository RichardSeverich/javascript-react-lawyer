import axios from 'axios';
import config from "./RequestConfig"
import buildEndpoint from "./RequestEndPoint";

const get = (endpoint, callback) => {
  const url = buildEndpoint(endpoint);
  console.log("*** GET REQUEST ***");
  console.log(url);
  axios.get(url, config)
    .then(response => {
      callback(response);
    })
    .catch(error => {
      callback(error.response);
  })
};

export default get;
