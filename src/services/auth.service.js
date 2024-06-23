import { http } from "./config.js";

const register = async (
  username,
  password,
  email,
  firstName,
  lastName,
  phone,
  address,
  identityDocument,
) => {
  const response = await http.post("/auth/register", {
    username,
    password,
    email,
    firstName,
    lastName,
    phone,
    address,
    identityDocument,
  });
  console.log("Register API call response:", response);
  if (response.status !== 201) {
    throw new Error("Error registering");
  }
  return response.data;
};

const login = async (usernameOrEmail, password) => {
  const response = await http.post("/auth/login", {
    usernameOrEmail,
    password,
  });
  // check the response status code oke or not
  // If not, throw an error
  if (response.status !== 200) {
    throw new Error("Error logging in");
  }

  // If oke
  // Store user data in local storage
  localStorage.setItem("auth", JSON.stringify(response.data));

  return response.data;
};

const logout = () => {
  localStorage.removeItem("auth");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("auth"))?.userInformation;
};

const getCurrentToken = () => {
  return JSON.parse(localStorage.getItem("auth"))?.userToken;
};

const AuthService = {
  login,
  logout,
  register,
  getCurrentUser,
  getCurrentToken,
};

export default AuthService;
