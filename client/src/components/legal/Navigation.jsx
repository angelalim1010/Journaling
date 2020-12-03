import React, { Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import logo from '../../img/zenyu-logo.svg';


const Navigation = () => {
  return (
    <Fragment>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand>
          <Nav.Link href="/"><img src={logo} alt="logo"/></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="/login" className='active'>Log In</Nav.Link>
          <Nav.Link href="/signup" className='active'>Sign Up</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default Navigation