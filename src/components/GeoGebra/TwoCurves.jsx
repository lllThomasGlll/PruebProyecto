import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PiGraph } from "react-icons/pi";
import GeoGebraApplet from "./GeoGebraApplet";
import MathInput from "react-math-keyboard";

import "../../styles/AppletStyle.css";

const TwoCurves = () => {
  const [inputs, setInputs] = useState([
    { id: 1, value: "", error: "" },
    { id: 2, value: "", error: "" },
  ]);
  const [limits, setLimits] = useState({ lowerLimit: 0, upperLimit: 1 });
  const [ggbApplet, setGgbApplet] = useState(null);

  const handleLoad = useCallback((applet) => setGgbApplet(applet), []);

  const handleInputChange = (id, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, value, error: "" } : input
      )
    );
  };

  const handleLimitChange = (limitType, value) => {
    setLimits((prevLimits) => ({ ...prevLimits, [limitType]: value }));
  };

  const handleButtonClick = () => {
    // const isValidCurve = (func) => {
    //   // Check if the function is a polynomial of degree greater than 1
    //   const polynomialRegex =
    //     /^[+-]?(\d*x(\^\d+)?)([+-]\d*x(\^\d+)?)*([+-]\d+)?$/;
    //   const degreeRegex = /\^(\d+)/;
    //   const matches = func.match(degreeRegex);
    //   const degree = matches ? parseInt(matches[1], 10) : 1;
    //   return polynomialRegex.test(func.replace(/\s+/g, "")) && degree > 1;
    // };

    let valid = true;

    setInputs((prevInputs) =>
      prevInputs.map((input) => {
        // if (!isValidCurve(input.value)) {
        // valid = false;
        // return {
        //   ...input,
        //   error: "Función no válida. Ingrese una curva.",
        // };
        // }
        return { ...input, error: "" };
      })
    );

    if (!valid) {
      return; // No grafiques si alguna función no es válida
    }

    if (ggbApplet) {
      const appletObject = ggbApplet.getAppletObject();
      if (appletObject && appletObject.evalCommand) {
        inputs.forEach((input) => {
          if (input.value) {
            appletObject.evalCommand(`Delete[f${input.id}]`);
            appletObject.evalCommand(`f${input.id}(x)=${input.value}`);
          }
        });

        // Calcular el área entre las dos curvas
        const { lowerLimit, upperLimit } = limits;
        appletObject.evalCommand(
          `IntegralBetween[f1, f2, ${lowerLimit}, ${upperLimit}]`
        );
      }
    }
  };

  return (
    <Container fluid className="p-3 mb-5">
      <Row>
        <h3 className="title-graphic mb-5">
          <PiGraph size={50} /> Área entre curvas
        </h3>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={8} className="d-flex justify-content-center">
          <div className="ggb-container">
            <GeoGebraApplet onLoad={handleLoad} />
          </div>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Row className="align-items-center p-3">
            {inputs.map((input) => (
              <Col xs={12} key={input.id} className="mb-2">
                <div className="text-placeholder">
                  Ingresa una función (ej. 2x³+3x²+4x+5)
                </div>
                <Row className="align-items-center">
                  <Col xs={12}>
                    <div
                      className={`input-graphic w-100 ${
                        input.error ? "input-error" : ""
                      }`}
                    >
                      <MathInput
                        setValue={(value) => handleInputChange(input.id, value)}
                        onChange={(e) =>
                          handleInputChange(input.id, e.target.value)
                        }
                      />
                    </div>
                  </Col>
                </Row>
                {input.error && <div className="text-error">{input.error}</div>}
              </Col>
            ))}
            <Col xs={6} sm={6} md={6} className="align-items-center mt-2">
              <div className="text-placeholder">Límite inferior</div>
              <input
                type="number"
                value={limits.lowerLimit}
                onChange={(e) =>
                  handleLimitChange("lowerLimit", e.target.value)
                }
                className="input-graphic w-100"
              />
            </Col>
            <Col xs={6} sm={6} md={6} className="align-items-center mt-2">
              <div className="text-placeholder">Límite superior</div>
              <input
                type="number"
                value={limits.upperLimit}
                onChange={(e) =>
                  handleLimitChange("upperLimit", e.target.value)
                }
                className="input-graphic w-100"
              />
            </Col>
            <Col xs={12} className="mt-3">
              <button
                onClick={handleButtonClick}
                className="button-graphic btn btn-primary w-100"
              >
                Graficar y Calcular Área
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TwoCurves;
