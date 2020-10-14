import requestManager from "./../../../api/RequestManager"

const handleEdit = (body, id) => {
  const url = "users/".concat(id);
  requestManager.put(url, body, (response) => {
    console.log(response.status);
    if(response && response.status===200){
      alert("Editado exitosamente");
    } else {
      alert("No se puede Editar");
    }
  });

};

export default handleEdit;

