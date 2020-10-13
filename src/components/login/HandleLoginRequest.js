import requestManager from "./../../api/RequestManager"
import handleErrorMessage from "./HandleErrorMessage";

const handleLoginRequest = (username, password, 
  resetUsername, resetPassword, handleNavigate) => {
  const body = {
    username: username,
    password: password
  }
  requestManager.postAuth("login", body, (response) => {
    if(response.status===200){
      window.localStorage.setItem("token", response.data.data[0].token);
      handleNavigate();
    } else if(response.status===400){
      handleErrorMessage(resetUsername, resetPassword);
    } else if(response.status===404){
      handleErrorMessage(resetUsername, resetPassword);
    }
    else {
      console.log("Algo no esta funcionando bien, contacte con su administrador");
    }
  });
}

export default handleLoginRequest;
