import axios from "axios";

const url = "https://6546465ffe036a2fa95571ba.mockapi.io/api/v1";

export const createJob = async (user) => {
  try {
    const response = await axios.post(`${url}/Jobs`, user);
    console.log(response);
  } catch (error) {
    console.log("error while calling login API: ", error);
  }
};

export const getAllJobs = async (user) => {
  try {
    const response = await axios.get(`${url}//Jobs`);
    console.log(response);
  } catch (error) {
    console.log("error while calling Signup API: ", error);
  }
};

export const getJobById = async (id) => {
  try {
    const response = await axios.get(`${url}/Jobs/${id}`);
    console.log(response);
  } catch (error) {
    console.log("Error while getting product by id response", error);
  }
};

export const updateJobById = async (id,data) => {
  try {
    const response = await axios.put(`${url}/Jobs/${id}`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const removeJobById = async (id) => {
  try {
    const response = await axios.delete(`${url}/Jobs/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
