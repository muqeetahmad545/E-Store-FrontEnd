import React from "react";
import { Routes, Route } from "react-router-dom";
import AppProvider from "../context/ContextProvider";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AddProduct from "../components/AddProduct";
import ForgetPassword from "../components/ForgetPassword";
import MenCollection from "../components/MenCollection";
import WomenCollection from "../components/WomenCollection";
import BabyCollection from "../components/BabyCollection";
import NotFound from "../components/NotFound";

const Router = () => {
  return (
    <AppProvider>
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
    </AppProvider>
  );
};

export default Router;
