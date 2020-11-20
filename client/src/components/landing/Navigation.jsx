import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../../img/zenyu-logo.svg';


class Navigation extends Component {
  render() {
    return (
      <div id="landing" className="menu">
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
          <Navbar.Brand to='/'>
            <Nav.Link href="#landing">Zenyu</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#features" className="page-scroll">Features</Nav.Link>
            <Nav.Link href="#about" className='active'>About</Nav.Link>
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