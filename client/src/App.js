import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import UpdateData from "./pages/UpdateData";
import SendMail from "./pages/SendMail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<UpdateData />} />
        <Route path="/sendMail/:id" element={<SendMail />} />
      </Routes>
    </div>
  );
};

export default App;
