import React, { useState, useCallback } from "react";

import { Container, Row, Col } from "react-bootstrap";

import GeoGebraApplet from "./GeoGebraApplet";

const Lineal = () => {
  const [functionInput, setFunctionInput] = useState("");
  const [ggbApplet, setGgbApplet] = useState(null);

  const handleLoad = useCallback((applet) => setGgbApplet(applet), []);

  const handleInputChange = (e) => {
    setFunctionInput(e.target.value);
  };

  const handleButtonClick = () => {
    if (ggbApplet) {
      const appletObject = ggbApplet.getAppletObject();
      if (appletObject && appletObject.evalCommand) {
        appletObject.evalCommand(`f(x)=${functionInput}`);
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={6} md={8}>
          <GeoGebraApplet onLoad={handleLoad} />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <input
            type="text"
            value={functionInput}
            onChange={handleInputChange}
            placeholder="Ingresa una función lineal (ej. 2x+3)"
            className="form-control mb-2"
          />
          <button onClick={handleButtonClick} className="btn btn-primary">
            Graficar
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Lineal;
