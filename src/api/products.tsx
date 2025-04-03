import instance from "./instance";

export const getProducts = async () => {
  const response = await instance.get(`/products`);
  return response.data.data;
};
