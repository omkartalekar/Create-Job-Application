import axios from "axios";

const BASE_URL = "https://6546465ffe036a2fa95571ba.mockapi.io/api/v1";

export const createJob = async (job) => {
  try {
    const response = await axios.post(`${BASE_URL}/Jobs`, job);
    return response;
  } catch (error) {
    console.log("error while calling login API: ", error);
  }
};

export const updateJobById = async (id,data) => {
  try {
    const response = await axios.put(`${BASE_URL}/Jobs/${id}`, data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const removeJobById = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/Jobs/${id}`);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
