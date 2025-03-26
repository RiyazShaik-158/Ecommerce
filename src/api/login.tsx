import axios from "axios";

export const loginUser = async (loginPayload: Record<string, unknown>) => {
  const response = await axios.post(
    "http://localhost:8900/users/auth",
    loginPayload
  );
  return response.data;
};
