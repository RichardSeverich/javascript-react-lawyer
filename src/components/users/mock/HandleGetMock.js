import mockData from "./../../../mock-data/mock-data-manager";

const handleGetMock = (callback) => {
  callback(mockData.arrayUsers);
};

export default handleGetMock;
