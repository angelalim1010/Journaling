import React, { Component, Fragment } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';

import logo from '../../img/zenyu-logo.svg';


class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
          <Navbar.Brand>
            <Nav.Link href="/"><img src={logo} alt="logo"/></Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/home" className="page-scroll">Home</Nav.Link>
            <Nav.Link href="/journal" className='active'>Journal</Nav.Link>
            <Button onClick={ () => this.props.handleLogout() }> Log Out </Button>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation