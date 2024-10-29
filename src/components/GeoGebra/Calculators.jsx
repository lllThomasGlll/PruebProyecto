import React, { useEffect, useRef, useState } from "react"; // Importamos las librerías necesarias de React

const Calculators = () => {
  // Creamos una referencia para el applet de GeoGebra
  const ggbApplet = useRef(null);
  // Creamos un estado para almacenar la entrada de la función
  const [functionInput, setFunctionInput] = useState("");

  // useEffect se ejecuta después de que el componente se monta
  useEffect(() => {
    // Definimos los parámetros para inicializar el applet de GeoGebra
    const params = {
      id: "ggbApplet", // ID del applet
      appName: "graphing", // Nombre de la aplicación GeoGebra (gráficas)
      width: 800, // Ancho del applet en píxeles
      height: 600, // Alto del applet en píxeles
      showToolBar: false, // Ocultar la barra de herramientas
      showAlgebraInput: false, // Ocultar la entrada de álgebra
      showMenuBar: false, // Ocultar la barra de menú
      enableLabelDrags: false, // Deshabilitar el arrastre de etiquetas
      showToolBarHelp: false, // Ocultar la ayuda de la barra de herramientas
    };

    // Mostramos los parámetros en la consola para depuración
    console.log("Initializing GeoGebra with params:", params);

    // Inicializamos el applet de GeoGebra con los parámetros definidos
    ggbApplet.current = new window.GGBApplet(params, true);
    // Insertamos el applet en el div con ID "ggb-element"
    ggbApplet.current.inject("ggb-element");

    // Verificamos si la instancia de GeoGebra se ha cargado correctamente
    if (ggbApplet.current) {
      console.log("GeoGebra applet loaded:", ggbApplet.current);
    } else {
      console.error("GeoGebra applet not initialized");
    }
  }, []); // El array vacío [] asegura que se ejecute solo una vez al montar el componente

  // Función para manejar los cambios en la entrada del texto
  const handleInputChange = (e) => {
    console.log("Function input changed:", e.target.value);
    // Actualizamos el estado con el nuevo valor de entrada
    setFunctionInput(e.target.value);
  };

  // Función que se ejecuta cuando se hace clic en el botón
  const handleButtonClick = () => {
    console.log("Button clicked with function input:", functionInput);
    // Verificamos si el applet de GeoGebra está inicializado
    if (ggbApplet.current) {
      const appletObject = ggbApplet.current.getAppletObject(); // Obtenemos el objeto del applet
      console.log("GeoGebra applet instance:", appletObject);
      // Verificamos si evalCommand está disponible en el objeto del applet
      if (appletObject && appletObject.evalCommand) {
        console.log("Executing evalCommand with:", `f(x)=${functionInput}`);
        // Ejecutamos el comando para graficar la función ingresada
        appletObject.evalCommand(`f(x)=${functionInput}`);
      } else {
        console.error("evalCommand not available on GeoGebra applet");
      }
    } else {
      console.error("GeoGebra applet not initialized");
    }
  };

  return (
    <div>
      <div id="ggb-element" className="no-select"></div>{" "}
      {/* Div donde se inyectará el applet */}
      <input
        type="text"
        value={functionInput} // Valor del input basado en el estado
        onChange={handleInputChange} // Función llamada cuando cambia el input
        placeholder="Ingresa una función lineal (ej. 2x+3)" // Placeholder para el input
      />
      <button onClick={handleButtonClick}>Graficar</button>{" "}
      {/* Botón para graficar la función */}
    </div>
  );
};

export default Calculators; // Exportamos el componente para usarlo en otras partes de la aplicación
