const dummyData = [
  { name: "product1" },
  { name: "product2" },
  { name: "product3" },
  { name: "product4" },
  { name: "product5" },
];

const Home = () => {
  return (
    <div className="bg-red-500 h-[96%]">
      <div className="w-full h-full bg-white flex justify-center items-center flex-wrap gap-[20px]">
        {dummyData.map((item) => (
          <h4
            key={item.name}
            className="w-[200px] h-[300px] border-2 border-red-400 rounded"
          >
            {item.name}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Home;
