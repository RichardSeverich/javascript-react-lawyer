const handleErrorMessage = (resetUsername, resetPassword) => {
  alert("Usuario o Contrasena Incorrecto");
  resetUsername();
  resetPassword();
}
export default handleErrorMessage;
