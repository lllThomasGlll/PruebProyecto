import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Lineal from "../components/GeoGebra/lineal";
import Quadratic from "../components/GeoGebra/Quadratic";
import Cubic from "../components/GeoGebra/Cubic";
import OneCurve from "../components/GeoGebra/OneCurve";
import TwoCurves from "../components/GeoGebra/TwoCurves";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lineal" element={<Lineal />} />
        <Route path="/quadratic" element={<Quadratic />} />
        <Route path="/cubic" element={<Cubic />} />
        <Route path="/onecurve" element={<OneCurve />} />
        <Route path="/twocurves" element={<TwoCurves />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
