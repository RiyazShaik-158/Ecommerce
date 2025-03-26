import Navbar from "../components/Navbar";
import Router from "../routes/Router";

const Layout = () => {
  return (
    <div className="w-screen h-screen text-black font-sans">
      <Navbar />
      <Router />
    </div>
  );
};

export default Layout;
