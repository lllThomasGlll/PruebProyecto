import React from "react";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../styles/MyNavbarStyle.css";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false) // Estado para controlar si el menú está abierto o cerrado

  const handleSelect = () => {
    setExpanded(false); //Cerrar el menú cuando se selecciona un item 
  }

  return (
    <Navbar expand={false} className="custom-navbar" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          Geobravo
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-icon"
          onClick={() => setExpanded(expanded ? false : true)} // Alternar el menú al hacer clic
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onSelect={handleSelect}>
            <Nav.Link as={Link} to="/" className="nav-link-custom" onClick={handleSelect}>
              GeoBravo
            </Nav.Link>
            <Nav.Link as={Link} to="/resources" className="nav-link-custom" onClick={handleSelect}>
              Recursos
            </Nav.Link>
            <Nav.Link as={Link} to="/us" className="nav-link-custom" onClick={handleSelect}>
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom" onClick={handleSelect}>
              Acerca de
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
