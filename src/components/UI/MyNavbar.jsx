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
  const showBackButton = location.pathname !== "/";

  return (
    <>
      <Navbar expand={false} className="custom-navbar" expanded={expanded}>
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
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
                to="/"
                className="nav-link-custom"
                onClick={handleSelect}
              >
                GeoBravo
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/resources"
                className="nav-link-custom"
                onClick={handleSelect}
              >
                Recursos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/us"
                className="nav-link-custom"
                onClick={handleSelect}
              >
                Nosotros
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="nav-link-custom"
                onClick={handleSelect}
              >
                Acerca de
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Botón debajo del Navbar */}
      {showBackButton && (
        <Container fluid className="back-button-container">
          <Button className="back-button" onClick={() => navigate("/")}>
            <IoIosArrowBack size={35} />
            Volver
          </Button>
        </Container>
      )}
    </>
  );
};

export default MyNavbar;
