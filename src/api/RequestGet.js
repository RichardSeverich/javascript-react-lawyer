import axios from 'axios';
import config from "./RequestConfig"
import buildEndpoint from "./RequestEndPoint";

const get = (endpoint, callback) => {
  const url = buildEndpoint(endpoint);
  axios.get(url, config)
    .then(response => {
      callback(response);
    })
    .catch(error => {
      callback(error);
  })
};

export default get;
