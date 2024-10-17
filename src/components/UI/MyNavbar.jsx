import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand={false}>
      <Container>
        <Navbar.Brand href="#home">Geobravo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">GeoBravo</Nav.Link>
            <Nav.Link href="#link">Recursos</Nav.Link>
            <Nav.Link href="#about">Nosotros</Nav.Link>
            <Nav.Link href="#contact">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
