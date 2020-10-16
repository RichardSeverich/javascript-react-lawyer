import requestManager from "./../../../api/RequestManager"
import messageManager from "./../../common/MessageManager";

const handleGetRequest = (callback) => {
    requestManager.get("users", (response) => {
      if(response && response.status===200){
        callback(response.data.data);
      } else {
        messageManager.commonMessages(response);
      }
    });
};

export default handleGetRequest;
