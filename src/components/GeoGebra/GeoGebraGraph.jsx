// src/components/GeoGebraGraph.js
import React from "react";
import GeoGebra from "react-geogebra"; // Importación por defecto

const GeoGebraGraph = () => {
  return (
    <div>
      <GeoGebra
        id="ggbApplet"
        appName="graphing" // Puedes cambiar a otro tipo de aplicación como geometry o 3d.
        width={800}
        height={600}
        showToolBar={true} // Muestra la barra de herramientas de GeoGebra.
        showAlgebraInput={true} // Muestra el campo de entrada algebraica.
        showMenuBar={false} // Oculta la barra de menú.
        borderColor="#000000" // Borde negro alrededor de la applet.
      />
    </div>
  );
};

export default GeoGebraGraph;
