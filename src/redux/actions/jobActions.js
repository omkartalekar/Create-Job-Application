import axios from "axios";

const BASE_URL = "https://6546465ffe036a2fa95571ba.mockapi.io/api/v1";


const getAllJobsSuccess = (data) => {
  return { type: "GET_ALL_JOBS_SUCCESS", payload: data };
};

const getAllJobsFailure = (error) => {
  return { type: "GET_ALL_JOBS_FAILURE", payload: error };
};

// Async action to fetch jobs
export const getAllJobs = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/Jobs`);
    const data = response.data;

    dispatch(getAllJobsSuccess(data)); // Dispatch a success action with the fetched data
  } catch (error) {
    dispatch(getAllJobsFailure(error)); // Dispatch a failure action with the error
  }
};
