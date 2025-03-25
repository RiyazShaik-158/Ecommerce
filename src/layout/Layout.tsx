import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../components/SignUp";

const Layout = () => {
  return (
    <div className="w-screen h-screen text-black">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
