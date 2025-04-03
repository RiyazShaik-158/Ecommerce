import { useQuery } from "react-query";
import { getProducts } from "../api/products";
import { GetProductsType } from "../constants/types";

const Home = () => {
  const { isLoading, data } = useQuery("products", getProducts);

  if (data) {
    console.log("products data", data);
  }

  return (
    <div className="bg-red-500 h-[96%]">
      {isLoading ? (
        <h4>Wait man, Loading...</h4>
      ) : (
        <div className="w-full h-full bg-white flex justify-center items-center flex-wrap gap-[20px]">
          {data.map((item: GetProductsType) => (
            <h4
              key={item.name}
              className="w-[200px] h-[300px] border-2 border-red-400 rounded"
            >
              {item.name}
            </h4>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
