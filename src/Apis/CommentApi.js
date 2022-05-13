import axiosInstance from "./axiosInstance";

const getCommentsByPostId = async (data) => {
  return await axiosInstance.get(`/comments/getCommentsByPostId/${data.postId}`);
}

const getAll = async () => {
  return await axiosInstance.get('/comments/')
}

export default {
  getCommentsByPostId,
  getAll,
}