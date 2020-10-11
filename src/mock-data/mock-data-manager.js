import { users } from "./users.json";

var arrayUsers = users;

const updateArrayUsers = (newArrayUsers) => {
  arrayUsers = newArrayUsers;
};

const mockData = {
  arrayUsers: arrayUsers,
  updateArrayUsers: updateArrayUsers,
};

export default mockData;
