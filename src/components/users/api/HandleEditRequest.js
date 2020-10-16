import requestManager from "./../../../api/RequestManager"
import messageManager from "./../../common/MessageManager";

const handleEdit = (body, id, handleReset, setIsEdit) => {
  const url = "users/".concat(id);
  console.log("ACAA ESTAA handleResetField");
  console.log(handleReset);
  requestManager.put(url, body, (response) => {
    if(response && response.status===200) {
      handleReset();
      setIsEdit(undefined);
    }
    messageManager.editMessages(response);
  });

};

export default handleEdit;
