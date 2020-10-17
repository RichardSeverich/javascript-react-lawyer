import mockData from "./../../../mock-data/mock-data-manager";

const handleGetMock = (endpoint, callback) => {
  if(endpoint==="users/"){
    callback(mockData.arrayUsers);
  }
};

export default handleGetMock;
