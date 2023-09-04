import axios from "axios";

const baseUrl =
  process.env.REACT_APP_ENVIRONMENT === "production"
    ? ""
    : "http://localhost:1337/api/stigagangurinn";

// const credentials = process.env.REACT_APP_ENVIRONMENT === "production"
// shared create axios client
const axiosClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// shared get api
export const getAPI = async (url, newBaseURL) => {
  try {
    if (newBaseURL) axiosClient.defaults.baseURL = newBaseURL;
    // Update the base URL if a new one is provided
    return await axiosClient.get(url);
  } catch (error) {
    if (error.response.data.status === 401) {
      window.location.href = "/";
      return 401;
    }
    // window.location.href = "/500";
  }
};