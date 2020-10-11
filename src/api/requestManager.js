import axios from 'axios';
import buildEndpoint from "./endPointBuilder";

const token = window.localStorage.getItem("token");

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

const get = (endpoint, callback) => {
  const url = buildEndpoint(endpoint);
  axios.get(url, config)
    .then(response => {
      if(response.data.data){
        callback(response.data.data);
      }
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        alert("Algo malo paso... contacte con su administrador");
    }
  })
};

const post = (endpoint, body, callback) => {
  const url = buildEndpoint(endpoint);
  axios.post(url, body, config)
    .then(response => {
      callback(response);
    })
    .catch(error => {
      callback(error)
  })
};

const requestManager = {
  get,
  post
}

export default requestManager;
