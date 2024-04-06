import React, { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Homepage } from "../pages/Home";
import Product from "../pages/Product";

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product/>}/>
    </Routes>
  );
};

export default Routing;