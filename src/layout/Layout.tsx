import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  // if(!token) {
  //   <Navigate to={"/login"} replace/>
  // }
  return (
    <div className="w-screen h-screen text-black font-sans">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
