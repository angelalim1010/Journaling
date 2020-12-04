import React, { Component, Fragment } from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import logo from '../../img/zenyu-logo.svg';
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
            <Nav.Link href="/"><img src={logo} alt="Zenyu Logo"/></Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/dashboard" className='active'>Home</Nav.Link>
            <Nav.Link href="/all" className='active'>Journal</Nav.Link>
            <Button onClick={() => this.handleLogout()}>Logout</Button>
          </Nav>
          
          </Navbar.Collapse>
            </Navbar>    
            </Fragment>
            
        )
    }
}

export default withRouter(Navigation);