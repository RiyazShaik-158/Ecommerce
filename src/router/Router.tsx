import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Layout from "../layout/Layout";

const Router = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
