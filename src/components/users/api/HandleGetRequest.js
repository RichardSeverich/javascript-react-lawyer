import requestManager from "./../../../api/RequestManager"

const handleGetRequest = (callback) => {
    requestManager.get("users", (response) => {
      console.log(response.status);
      if(response && response.status===200){
        callback(response.data.data);
      } else {
        alert("Error: Contacte con su administrador");
      }
    });
};

export default handleGetRequest;
