import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
const Navigation = () => {
  const {user,logOut}=useAuth()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Auto Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
          
            <span className="text-white">
                  {
                    user.email &&   <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>

                       
                  }
             </span>
            <span className="p-2 text-white">
                  {
                    user.email &&  <span className="p-2 text-white">  {user.displayName} </span>

                       
                  }
             </span>
            {
             user.email ?
             <button onClick={logOut}>  Log out</button>
               : <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link>
            }

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;