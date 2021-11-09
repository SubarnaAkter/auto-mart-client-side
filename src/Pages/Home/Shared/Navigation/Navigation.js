import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Auto Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Login
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;