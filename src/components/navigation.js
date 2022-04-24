import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navigation() {
  return (
    <Navbar bg="primary p-0" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#" className="p-0">
          <img
            src="./assets/images/cookie-reg-logo.png"
            width="300"
            height="100"
            className="d-inline-block align-top m-0"
            alt="Dalia's Cookie Jar logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Designs</Nav.Link>
              <NavDropdown title="Contact" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Facebook</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Instagram</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
