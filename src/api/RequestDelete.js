import axios from 'axios';
import config from "./RequestConfig"
import buildEndpoint from "./RequestEndPoint";

const remove = (endpoint, callback) => {
  const url = buildEndpoint(endpoint);
  console.log("*** DELETE REQUEST ***");
  console.log(url);
  axios.delete(url, config)
    .then(response => {
      callback(response);
    })
    .catch(error => {
      callback(error.response);
  })
};

export default remove;
