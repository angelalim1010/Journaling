import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../img/zenyu-logo.svg';


const NavLink = ({item}) => {
  const { link, label } = item;
  return (
    <>
      <Nav.Link href={link} className="active">{label}</Nav.Link>
    </>
  )
}

export const NavDefault = ({nav}) => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand>
          <Nav.Link href="/"><img src={logo} alt="logo"/></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {nav.map((item, i) => <NavLink key={i} item={item} /> )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}