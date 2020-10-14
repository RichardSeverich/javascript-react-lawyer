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

const { REACT_APP_MOCK_DATA } = process.env;

// GET
const handleGet = (callback) => {
  if (REACT_APP_MOCK_DATA === "FALSE") {
    handleGetRequest(callback);
  } else {
    handleGetMock(callback);
  }
};
// CREATE
const handleCreate = (data) => {
  if (REACT_APP_MOCK_DATA === "FALSE") {
    handleAddRequest(data);
  } else {
    handleAddMock();
  }
};
// EDIT AND DELETE
let handleEdit = handleEditMock;
let handleDelete = handleDeleteMock;
if(REACT_APP_MOCK_DATA === "FALSE"){
  handleEdit = handleEditRequest;
  handleDelete = handleDeleteRequest;
}

export {
  handleGet,
  handleCreate,
  handleEdit,
  handleDelete,
}
