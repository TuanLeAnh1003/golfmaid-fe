import axiosInstance from "./axiosInstance";

const getContractByIdAndPhone = async (data) => {
  return await axiosInstance.get(`/contracts/getContractByIdAndPhone/contractId=${data.contractId}&phoneNumber=${data.phoneNumber}`);
}

const getContracts = async (data) => {
  return await axiosInstance.get("/contracts")
}

const createContract = async (data) => {
  return await axiosInstance.post("/contracts", data);
}

export default {
  createContract,
  getContractByIdAndPhone,
  getContracts,
}