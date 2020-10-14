import requestManager from "./../../../api/RequestManager"

const handleDelete = (id) => {
  const url = "users/".concat(id);
  const message = "Esta segudo que desa realizar esta accion?"
  let result = window.confirm(message);
  if(result){
    requestManager.remove(url, (response) => {
      console.log(response.status);
      if(response && response.status===200){
        alert("Eliminado exitosamente");
      } else {
        alert("No se puede eliminar");
      }
    });
  }
};

export default handleDelete;
