import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Lineal from "../components/GeoGebra/lineal";
import Quadratic from "../components/GeoGebra/Quadratic";
import Cubic from "../components/GeoGebra/Cubic";
import OneCurve from "../components/GeoGebra/OneCurve";
import TwoCurves from "../components/GeoGebra/TwoCurves";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="PruebaProyecto/" element={<HomePage />} />
      <Route path="PruebaProyecto/Lineal" element={<Lineal />} />
      <Route path="PruebaProyecto/Quadratic" element={<Quadratic />} />
      <Route path="PruebaProyecto/Cubic" element={<Cubic />} />
      <Route path="PruebaProyecto/Onecurve" element={<OneCurve />} />
      <Route path="PruebaProyecto/Twocurves" element={<TwoCurves />} />
    </Routes>
  );
};

export default AppRouter;
