import React, { Component, Fragment } from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';

import logo from '../../img/zenyu-logo.svg';
import '../style/style.css';

import { withRouter } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


class Navigation extends Component{
    static contextType = AuthContext

    constructor(props){
        super(props);
    }

    handleLogout = () => {
        const { logout } = this.context
        logout();
        this.props.history.push('/')
        console.log("logging out");
      }
    

  render(){
    return(
      <Fragment>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
          <Navbar.Brand>
            <Nav.Link href="/home"><img src={logo} alt="Zenyu Logo"/></Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/home" className='active'>Home</Nav.Link>
            <Nav.Link href="/journal" className='active'>Journal</Nav.Link>
            <Nav.Link href="/prompts" className='active'>Library</Nav.Link>
            <Button className='btn' onClick={() => this.handleLogout()}>Logout</Button>
          </Nav>
          
          </Navbar.Collapse>
            </Navbar>    
            </Fragment>
            
        )
    }
}

export default withRouter(Navigation);