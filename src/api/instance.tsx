import axios from "axios";
import { backend_url } from "../constants/constants";

const instance = axios.create({
  baseURL: `${backend_url}/`,
});

const token = localStorage.getItem("token");

instance.interceptors.request.use(
  async (config) => {
    config.headers.Accept = "application/json";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if ([401].includes(error?.response?.status)) {
      console.log("Invalid token or token expired");
      // localStorage.clear();
      // window.location.reload();
      // window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default instance;
