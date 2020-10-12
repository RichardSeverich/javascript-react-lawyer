import requestManager from "./../../api/RequestManager"
import handleErrorMessage from "./HandleErrorMessage";

const handleLoginRequest = (username, password, 
  resetUsername, resetPassword, handleNavigate) => {
  const body = {
    username: username,
    password: password
  }
  console.log(body);
  requestManager.postAuth("login", body, (response) => {
    console.log(response);
    if(response.data){
      window.localStorage.setItem("token", response.data.data[0].token);
      handleNavigate();
    } else {
      handleErrorMessage(resetUsername, resetPassword);
    }
  });
}

export default handleLoginRequest;
