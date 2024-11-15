// src/config/router.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Lineal from "../components/GeoGebra/lineal";
import Quadratic from "../components/GeoGebra/Quadratic";
import Cubic from "../components/GeoGebra/Cubic";
import OneCurve from "../components/GeoGebra/OneCurve";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lineal" element={<Lineal />} />
      <Route path="/Quadratic" element={<Quadratic />} />
      <Route path="/Cubic" element={<Cubic />} />
      <Route path="/OneCurve" element={<OneCurve />} />
    </Routes>
  );
};

export default AppRouter;
