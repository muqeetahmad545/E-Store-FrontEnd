import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/login";
import SignUp from "../components/signUp";
import AddProduct from "../components/addProduct";
import ForgetPassword from "../components/forgetPassword";
import MenCollection from "../components/menCollection";
import WomenCollection from "../components/womenCollection";
import BabyCollection from "../components/babyCollection";
import NotFound from "../components/notFound";
const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/forgetPass" element={<ForgetPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="/menCollection" element={<MenCollection />} />
      <Route path="/womenCollection" element={<WomenCollection />} />
      <Route path="/babyCollection" element={<BabyCollection />} />
      <Route path="/error" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
