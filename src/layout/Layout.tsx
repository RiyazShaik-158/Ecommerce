import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Layout = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <div className="w-screen h-screen text-black font-sans">
      <Outlet />
    </div>
  );
};

export default Layout;
