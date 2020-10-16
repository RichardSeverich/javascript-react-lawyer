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
  isMockDisable 
  ? handleGetRequest(callback) 
  : handleGetMock(callback);
};
// CREATE
const handleCreate = (data, handleReset) => {
  isMockDisable 
  ? handleAddRequest(data, handleReset) 
  : handleAddMock(data, handleReset);
};
// EDIT
const handleEdit = (data, id, handleReset, setIsEdit) => {
  isMockDisable 
  ? handleEditRequest(data, id, handleReset, setIsEdit) 
  : handleEditMock(data, id, handleReset, setIsEdit);
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
