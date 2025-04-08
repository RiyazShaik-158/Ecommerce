import axios from "axios";
import { backend_url } from "../constants/constants";

const instance = axios.create({
  baseURL: `${backend_url}/`,
});

instance.interceptors.request.use(
  async (config) => {
    config.headers.Accept = "application/json";
    const token = localStorage.getItem("token");

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
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      window.location.href = "/login";
      // localStorage.clear();
      // window.location.reload();
      // window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default instance;
