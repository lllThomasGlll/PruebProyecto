import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GeoGebraApplet from "./GeoGebraApplet";

import "../../styles/AppletStyle.css";

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
    <Container fluid className="p-3">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={8} className="d-flex justify-content-center">
          <div className="ggb-container">
            <GeoGebraApplet onLoad={handleLoad} />
          </div>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Row className="align-items-center p-3">
            <Col xs={12} sm={12} md={12} className="mb-3">
              <input
                type="text"
                value={functionInput}
                onChange={handleInputChange}
                placeholder="Ingresa una función lineal (ej. 2x+3)"
                className="input-graphic w-100"
              />
            </Col>
            <Col xs={12} sm={12} md={12} className="mb-3">
              <button
                onClick={handleButtonClick}
                className="button-graphic btn btn-primary w-100"
              >
                Graficar
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Lineal;
