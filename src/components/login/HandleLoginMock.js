import mockData from "./../../mock-data/mock-data-manager";
import handleErrorMessage from "./HandleErrorMessage";

const handleLoginMock= (username, password, 
  resetUsername, resetPassword, handleNavigate) => {
  if (isUserValid(username, password)) {
    handleNavigate();
  } else {
    handleErrorMessage(resetUsername, resetPassword);
  }
};

const isUserValid = (username, password) => {
  let isValid = false;
  mockData.arrayUsers.forEach(function (user, indice) {
    let isValidDni = user.dni === username && user.password === password;
    let isValidUsername = user.username === username && user.password === password;
    if (isValidDni || isValidUsername) {
      isValid = true;
    }
  });
  return isValid;
}

export default handleLoginMock;
