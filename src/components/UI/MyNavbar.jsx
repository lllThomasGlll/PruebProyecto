import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import "../../styles/MyNavbarStyle.css";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const handleSelect = () => {
    setExpanded(false);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.pathname !== "/PruebaProyecto/";

  return (
    <>
      <Navbar expand={false} className="custom-navbar" expanded={expanded}>
        <Container>
          <Navbar.Brand
            as={Link}
            to="PruebaProyecto/"
            className="navbar-brand-custom"
            onClick={handleSelect}
          >
            Geobravo
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-icon"
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" onSelect={handleSelect}>
              <Nav.Link
                as={Link}
                to="PruebaProyecto/Lineal"
                className="nav-link-custom"
                onClick={handleSelect}
              >
                Funciones Lineales
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="PruebaProyecto/Quadratic"
                className="nav-link-custom"
                onClick={handleSelect}
              >
                Funciones Cuadráticas
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="PruebaProyecto/Cubic"
                className="nav-link-custom"
                onClick={handleSelect}
              >
                Funciones Cúbicas
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="PruebaProyecto/Onecurve"
                className="nav-link-custom"
                onClick={handleSelect}
              >
                Área bajo la curva
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="PruebaProyecto/Twocurves"
                className="nav-link-custom"
                onClick={handleSelect}
              >
                Área entre curvas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Botón debajo del Navbar */}
      {showBackButton && (
        <Container fluid className="back-button-container">
          <Button
            className="back-button"
            onClick={() => navigate("/PruebaProyecto/")}
          >
            <IoIosArrowBack size={35} />
            Volver
          </Button>
        </Container>
      )}
    </>
  );
};

export default MyNavbar;
