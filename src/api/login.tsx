import axios from "axios";
const backend_url = process.env.REACT_APP_SERVER_DOMAIN;
console.log("backend_url", backend_url);

export const loginUser = async (loginPayload: Record<string, unknown>) => {
  const response = await axios.post(`${backend_url}/users/auth`, loginPayload);
  return response.data;
};
