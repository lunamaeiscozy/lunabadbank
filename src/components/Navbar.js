import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation({ handleNavigation }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">My Bad Bank</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => handleNavigation('home')}>Home</Nav.Link>
          <Nav.Link onClick={() => handleNavigation('create')}>Create Account</Nav.Link>
          <Nav.Link onClick={() => handleNavigation('deposit')}>Make a Deposit</Nav.Link>
          <Nav.Link onClick={() => handleNavigation('withdraw')}>Make a Withdrawal</Nav.Link>
          <Nav.Link onClick={() => handleNavigation('alldata')}>All User Data</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
