// src/config/router.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Us from "../pages/Us";
import Resources from "../pages/Resources";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/us" element={<Us />} />

    </Routes>
  );
};

export default AppRouter;
