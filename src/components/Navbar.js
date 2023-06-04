import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        My Bank
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/deposit">
            Deposit
          </Nav.Link>
          <Nav.Link as={Link} to="/withdraw">
            Withdraw
          </Nav.Link>
          <Nav.Link as={Link} to="/all-data">
            All Data
          </Nav.Link>
          <Nav.Link as={Link} to="/create-account">
            Create Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
