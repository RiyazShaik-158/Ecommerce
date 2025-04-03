import axios from "axios";
import { backend_url } from "../constants/constants";

export const loginUser = async (loginPayload: Record<string, unknown>) => {
  const response = await axios.post(`${backend_url}/users/auth`, loginPayload);
  return response.data;
};
