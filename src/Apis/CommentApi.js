import axiosInstance from "./axiosInstance";

const getCommentsByPostId = async (data) => {
  return await axiosInstance.get(`/comments/getCommentsByPostId/${data.postId}`);
}

export default {
  getCommentsByPostId,
}