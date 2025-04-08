import { useQuery } from "react-query";
import { getProducts } from "../api/products";
import { GetProductsType } from "../constants/types";
import { useState } from "react";
// import { useAuth } from "../context/Auth";

const Home = () => {
  const { isLoading, data, error, status } = useQuery("products", getProducts);
  // const { role } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [err] = useState<any>(error);

  if (error) {
    console.log("error is ", err, err?.message, status);
  }

  return (
    <div className="min-h-[660px] w-full bg-white flex justify-center">
      {/* {role === "admin" ? <h4>Hello world</h4> : null} */}
      {isLoading ? (
        <h4>Wait man, Loading...</h4>
      ) : (
        <div className="lg:w-[90vw] md:w-[75vw] h-full flex justify-start items-start flex-wrap gap-6 lg:p-4 md:px-14 md:py-6">
          {data.map((item: GetProductsType) => (
            <h4
              key={item.name}
              className="w-[250px] h-[300px] border-2 border-red-400 rounded"
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
