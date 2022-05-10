import axiosInstance from "./axiosInstance";

// const login = async (data) => {
//   return await axiosInstance.post("/login", data);
// };
const register = async (data) => {
  return await axiosInstance.post("/users/register", data);
}

const login = async (data) => {
  return await axiosInstance.post("/users/login", data)
}

const getMe = async (data) => {
  return await axiosInstance.get(`/users/getMe/${data.userId}`)
}

export default {
  login,
  register,
  getMe
}