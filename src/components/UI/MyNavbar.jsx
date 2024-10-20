import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../styles/MyNavbarStyle.css";

const MyNavbar = () => {
  return (
    <Navbar expand={false} className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          Geobravo
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-icon"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              GeoBravo
            </Nav.Link>
            <Nav.Link as={Link} to="/resources" className="nav-link-custom">
              Recursos
            </Nav.Link>
            <Nav.Link as={Link} to="/us" className="nav-link-custom">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              Acerca de
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
