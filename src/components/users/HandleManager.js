// API
import handleGetRequest from "./api/HandleGetRequest";
import handleAddRequest from "./api/HandleAddRequest";
import handleEditRequest from "./api/HandleEditRequest";
import handleDeleteRequest from "./api/HandleDeleteRequest";
// MOCK
import handleGetMock from "./mock/HandleGetMock";
import handleAddMock from "./mock/HandleAddMock";
import handleEditMock from "./mock/HandleEditMock";
import handleDeleteMock from "./mock/HandleDeleteMock";
// COMMON
import handleEditNavigate from "./HandleEditNavigate.js";

const { REACT_APP_MOCK_DATA } = process.env;
const isMockDisable = REACT_APP_MOCK_DATA === "FALSE";

// GET
const handleGet = (callback) => {
  if (isMockDisable) {
    handleGetRequest(callback);
  } else {
    handleGetMock(callback);
  }
};
// CREATE
const handleCreate = (data) => {
  if (isMockDisable) {
    handleAddRequest(data);
  } else {
    handleAddMock(data);
  }
};
// EDIT
const handleEdit = (data, id) => {
  if (isMockDisable) {
    handleEditRequest(data, id);
  } else {
    handleEditMock(data, id);
  }
};
// DELETE
let handleDelete = handleDeleteMock;
if(isMockDisable){
  handleDelete = handleDeleteRequest;
}

export {
  handleGet,
  handleCreate,
  handleEdit,
  handleEditNavigate,
  handleDelete,
}
