import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../img/zenyu-logo.svg';
import './NavMenu.css';


function NavMenu() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='navbar' variant='dark'>
                <Navbar.Brand to='/'>
                    <img src={Logo} className='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link to="/" className='active'>Features</Nav.Link>
                        <Nav.Link to="/" className='active'>About Us</Nav.Link>
                        <Nav.Link to="/" className='active'>Getting Started</Nav.Link>
                        <Nav.Link to="/" className='active'>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavMenu