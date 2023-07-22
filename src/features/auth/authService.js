import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}api/user/`;

const registerUser = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
  if (response.data) {
    localStorage.setItem("User", JSON.stringify(response.data));
  }
  return response.data;
};

const loginUser = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("User", JSON.stringify(response.data));
  }
  return response.data;
};

const logoutUser = async () => {
  localStorage.removeItem("User");
};
const authService = { registerUser, loginUser, logoutUser };

export default authService;
