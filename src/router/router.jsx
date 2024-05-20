import React from "react";
import { Routes, Route } from "react-router-dom";
import AppProvider from "../context/ContextProvider";
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
<AppProvider>
<Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/forgetPass" element={<ForgetPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="/menCollection" element={<MenCollection />} />
      <Route path="/womenCollection" element={<WomenCollection />} />
<<<<<<< Updated upstream
=======
{/* props passs */}
>>>>>>> Stashed changes
      <Route path="/babyCollection" element={<BabyCollection />} />
      <Route path="/error" element={<NotFound />} />
    </Routes>
</AppProvider>
  );
};

export default Router;
