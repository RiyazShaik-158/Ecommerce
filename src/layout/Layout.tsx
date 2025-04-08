import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Layout = () => {
  const { token } = useAuth();

  const localToken = localStorage.getItem("token");

  if (!token && !localToken) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
