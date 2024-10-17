import React from "react";
import { Container, Row } from "react-bootstrap";

import FeatureCard from "../components/UI/FeatureCard";

import worldProblems from "../assets/word_problems.gif";
import solutionStep from "../assets/solution-steps.gif";
import calculators from "../assets/calculators.gif";
import workSheets from "../assets/worksheets.gif";
import geometry from "../assets/geometry.gif";
import graphing from "../assets/graphing.gif";

const App = () => {
  const features = [
    {
      title: "Hojas de trabajo",
      description: "Generar hojas de trabajo para diversos temas.",
      image: calculators,
      link: "/hojas-de-trabajo",
    },
    {
      title: "Geometría",
      description: "Resolver problemas geométricos y dibujar formas.",
      image: geometry,
      link: "/geometria",
    },
    {
      title: "Pasos de solución",
      description: "Solucionador en un paso a paso para problemas.",
      image: graphing,
      link: "/pasos-de-solucion",
    },
    {
      title: "Gráficos",
      description: "Trazar funciones y analizar ecuaciones.",
      image: solutionStep,
      link: "/graficos",
    },
    {
      title: "Calculadoras",
      description: "Calculadoras para diferentes áreas.",
      image: worldProblems,
      link: "/calculadoras",
    },
    {
      title: "Problemas de palabras",
      description: "Soluciones a problemas matemáticos.",
      image: workSheets,
      link: "/problemas-de-palabras",
    },
  ];

  return (
    <>
      {/* Contenido de las tarjetas de funcionalidades */}
      <Container>
        <h1 className="text-center my-4">Mi Página de Matemáticas</h1>
        <Row>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              link={feature.link}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
