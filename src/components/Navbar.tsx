const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#61bf1a] flex justify-between items-center px-[20px]">
      <h4>Ecommerce site</h4>
      <div className="flex items-center justify-between w-3/4">
        <h4>Delivery Location</h4>
        <input
          placeholder="Search..."
          className="w-[500px] outline-none border-2 border-black p-1.5 rounded-lg shadow-cyan-200"
        />
        <h4>SignUp/Login</h4>
      </div>
      <h4>Cart</h4>
    </div>
  );
};

export default Navbar;
