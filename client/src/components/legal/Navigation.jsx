import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';


class Navigation extends Component {
  render() {
    return (
      <div id="landing" className="menu">
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
          <Navbar.Brand>
            <Nav.Link href="/">Zenyu</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/" className="page-scroll">Home</Nav.Link>
            <Nav.Link href="/login" className='active'>Log In</Nav.Link>
            <Nav.Link href="/signup" className='active'>Sign Up</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation