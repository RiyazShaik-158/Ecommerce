import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#61bf1a] flex justify-between items-center px-[20px]">
      <Link to={"/"}>
        <h4 className="text-black">Ecommerce site</h4>
      </Link>
      <div className="flex items-center justify-between w-3/4">
        <h4>Delivery Location</h4>
        <input
          placeholder="Search..."
          className="w-[500px] outline-none border-2 border-black p-1.5 rounded-lg shadow-cyan-200"
        />
        <Link to={"/login"}>
          <h4 className="text-black">Login</h4>
        </Link>
      </div>
      <h4>Cart</h4>
    </div>
  );
};

export default Navbar;
