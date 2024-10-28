// src/config/router.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Us from "../pages/Us";
import Resources from "../pages/Resources";
import About from "../pages/About";
import { Geometry } from "../components/GeoGebra/Geometry";
import Calculators from "../components/GeoGebra/Calculators";
import Graphics from "../components/GeoGebra/Graphics";
import Problems from "../components/GeoGebra/Problems";
import SolutionSteps from "../components/GeoGebra/SolutionSteps";
import Worksheets from "../components/GeoGebra/Worksheets";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/us" element={<Us />} />
      <Route path="/geometry" element={<Geometry />} />
      <Route path="/calculators" element={<Calculators />} />
      <Route path="/graphics" element={<Graphics />} />
      <Route path="/problems" element={<Problems />} />
      <Route path="/solutionSteps" element={<SolutionSteps />} />
      <Route path="/worksheets" element={<Worksheets />} />

    </Routes>
  );
};

export default AppRouter;
