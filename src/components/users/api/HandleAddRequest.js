import requestManager from "./../../../api/RequestManager"
import messageManager from "./../../common/MessageManager";

const handleAddRequest = (body, handleReset) => {
  console.log(body);
  requestManager.post("users", body, (response) => {
    if(response && response.status===201){handleReset();}
    messageManager.addMessages(response);
  });
}

export default handleAddRequest;
