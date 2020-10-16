import requestManager from "./../../../api/RequestManager"
import messageManager from "./../../common/MessageManager";

const handleDelete = (id) => {
  const url = "users/".concat(id);
  const message = "Esta segudo que desa realizar esta accion?"
  let result = window.confirm(message);
  if(result){
    requestManager.remove(url, (response) => {
      messageManager.deleteMessages(response);
      window.location.reload();
    });
  }
};

export default handleDelete;
