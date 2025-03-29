import { Outlet } from "react-router-dom";

const Layout = () => {
  // if(!token) {
  //   <Navigate to={"/login"} replace/>
  // }
  return (
    <div className="w-screen h-screen text-black font-sans">
      <Outlet />
    </div>
  );
};

export default Layout;
