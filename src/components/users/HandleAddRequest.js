import requestManager from "./../../api/RequestManager"

const handleAddRequest = (body) => {
  requestManager.post("users", body, (response) => {
    if(response.status===201){
      alert("Creado exitosamente");
    } else if(response.status===400){
      alert("No se puede crear");
    } else {
      alert("Algo malo paso contacte con su administrador");
    }
  });
}

export default handleAddRequest;
