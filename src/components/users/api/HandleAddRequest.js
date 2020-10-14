import requestManager from "./../../../api/RequestManager"

const handleAddRequest = (body) => {
  requestManager.post("users", body, (response) => {
    if(response && response.status===201){
      alert("Creado exitosamente");
    } else if(response && response.status===400) {
      alert("No se puede crear");
    } else {
      alert("Error: Contacte con su administrador");
    }
  });
}

export default handleAddRequest;
