import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-blue">
        <Container>
          <Navbar.Brand as={Link} to="/">
            🥬 peppermint <sub>robotics</sub>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/solutions">
                Solutions
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/resources">
                Resources
              </Nav.Link>
              <Nav.Link as={Link} to="/contact-us">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/careers">
                Careers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
