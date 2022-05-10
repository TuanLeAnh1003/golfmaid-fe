import axiosInstance from "./axiosInstance";

const getContractByIdAndPhone = async (data) => {
  return await axiosInstance.get(`/contracts/getContractByIdAndPhone/contractId=${data.contractId}&phoneNumber=${data.phoneNumber}`);
}


const createContract = async (data) => {
  return await axiosInstance.post("/contract", data);
}

export default {
  createContract,
  getContractByIdAndPhone,
}