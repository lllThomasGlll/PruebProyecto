import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

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
            <Nav.Link href="#home" className="nav-link-custom">
              GeoBravo
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link-custom">
              Recursos
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">
              Acerca de
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
