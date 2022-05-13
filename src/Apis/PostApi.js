import axiosInstance from "./axiosInstance";

const getAll = async () => {
  return await axiosInstance.get("/posts");
}

const getPostsAndAuthor = async () => {
  return await axiosInstance.get("/posts/getPostsAndAuthor");
}

const getListHouseHelper = async () => {
  return await axiosInstance.get("/posts/getListHouseHelper");
}

const getListFindHouseHelper = async () => {
  return await axiosInstance.get("/posts/getListFindHouseHelper");
}

const createPost = async (data) => {
  console.log(data);
  return await axiosInstance.post('/posts/', data)
}

export default {
  getAll,
  getPostsAndAuthor,
  getListHouseHelper,
  getListFindHouseHelper,
  createPost,
}