import React, { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";

const Routing = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routing;