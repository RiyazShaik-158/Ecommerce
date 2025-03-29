import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Layout from "../layout/Layout";
import Navbar from "../components/Navbar";

const Router = () => {
  return (
    <div className="w-screen h-screen text-black">
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
