import requestManager from "./../../api/requestManager"
import handleErrorMessage from "./HandleErrorMessage";

const handleLoginRequest = (username, password, 
  resetUsername, resetPassword, handleNavigate) => {
  const body = {
    username,
    password
  }
  requestManager.post("login", body, (response) => {
    if(response.data){
      window.localStorage.setItem("token", response.data.data[0].token);
      handleNavigate();
    } else {
      handleErrorMessage(resetUsername, resetPassword);
    }
  });
}

export default handleLoginRequest;
