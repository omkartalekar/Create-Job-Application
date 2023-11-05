const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_JOBS_SUCCESS":
      return {
        ...state,
        loading: false,
        jobs: action.payload,
        error: null,
      };
    case "GET_ALL_JOBS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
