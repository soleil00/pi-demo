import axios from "axios";

const backendURL = "http://localhost:9000";

export const axiosClient = axios.create({
  baseURL: `${backendURL}`,
  timeout: 20000,
  withCredentials: true,
});
