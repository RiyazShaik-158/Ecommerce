import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import SignUp from "../components/SignUp";
import Home from "../components/Home";

const Layout = () => {
  return (
    <div className="w-screen h-screen text-black font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Layout;
