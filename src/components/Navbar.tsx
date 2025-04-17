import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const address = window.location.pathname;

  return (
    <div className="w-full h-16 bg-[#61bf1a] flex justify-between items-center px-[20px]">
      <Link to={"/"}>
        <h4 className="text-black">Ecommerce site</h4>
      </Link>
      {address.includes("/login") || address.includes("/signup") ? null : (
        <>
          <div className="flex items-center justify-between w-3/4">
            <div></div>
            <input
              placeholder="Search..."
              className="w-[500px] outline-none border-2 border-black p-1.5 rounded-lg shadow-cyan-200"
            />
            {user ? (
              <Popover
                as="div"
                className="group !m-0 !p-0 !border-0 !bg-white !rounded-xl"
              >
                <PopoverButton
                  as="button"
                  className="flex items-center gap-2 font-semibold !bg-white !rounded !text-blue-500 !p-2 !px-3"
                >
                  {`Hello ${String(user)}`}
                </PopoverButton>
                <PopoverPanel
                  as={"div"}
                  anchor="bottom"
                  className="flex flex-col"
                >
                  <button
                    onClick={logout}
                    className="p-1 px-2 rounded text-red-500 border-2 border-red-500 bg-white w-[100px]"
                  >
                    Logout
                  </button>
                </PopoverPanel>
              </Popover>
            ) : (
              <Link to={"/login"}>
                <h4 className="text-black">Login</h4>
              </Link>
            )}
          </div>
          <h4>Cart</h4>
        </>
      )}
    </div>
  );
};

export default Navbar;
