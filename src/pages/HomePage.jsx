import React from "react";
import { Container, Row } from "react-bootstrap";


import "../styles/HomePageStyle.css";

import FeatureCard from "../components/UI/FeatureCard";

import worldProblems from "../assets/word_problems.gif";
import solutionStep from "../assets/solution-steps.gif";
import calculators from "../assets/calculators.gif";
import workSheets from "../assets/worksheets.gif";
import geometry from "../assets/geometry.gif";
import graphing from "../assets/graphing.gif";

import worldProblemsPng from "../assets/word_problems.png";
import solutionStepPng from "../assets/solution-steps.png";
import calculatorsPng from "../assets/calculators.png";
import workSheetsPng from "../assets/worksheets.png";
import geometryPng from "../assets/geometry.png";
import graphingPng from "../assets/graphing.png";

const App = () => {
  const features = [
    {
      title: "Hojas de trabajo",
      description: "Generar hojas de trabajo para diversos temas.",
      image: calculators,
      staticImage: calculatorsPng,
      link: "/hojas-de-trabajo",
    },
    {
      title: "Geometría",
      description: "Resolver problemas geométricos.",
      image: geometry,
      staticImage: geometryPng,
      link: "/geometria",
    },
    {
      title: "Pasos de solución",
      description: "Solucionador en un paso a paso para problemas.",
      image: graphing,
      staticImage: graphingPng,
      link: "/pasos-de-solucion",
    },
    {
      title: "Gráficos",
      description: "Trazar funciones y analizar ecuaciones.",
      image: solutionStep,
      staticImage: solutionStepPng,
      link: "/graficos",
    },
    {
      title: "Calculadoras",
      description: "Calculadoras para diferentes áreas.",
      image: worldProblems,
      staticImage: worldProblemsPng,
      link: "/calculadoras",
    },
    {
      title: "Problemas",
      description: "Soluciones a problemas matemáticos.",
      image: workSheets,
      staticImage: workSheetsPng,
      link: "/problemas-de-palabras",
    },
  ];

  return (
    <>
      {/* Contenido de las tarjetas de funcionalidades */}
      <Container className="container-home">
        <Row>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              staticImage={feature.staticImage}
              link={feature.link}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
