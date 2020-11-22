import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import logo from '../../img/zenyu-logo.svg';


class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
          <Navbar.Brand>
            <Nav.Link href="/"><img src={logo} alt="logo"/></Nav.Link>
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