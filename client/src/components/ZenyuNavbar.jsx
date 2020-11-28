import React, { Component } from 'react';
import {Navbar, Button} from 'react-bootstrap';
import ZenyuLogo from '../img/zenyu-logo.svg';
import {withRouter} from 'react-router-dom';
import AuthContext from '../context/auth/authContext';


class ZenyuNavbar extends Component{
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
            <Navbar bg="dark" variant="dark" className="underline">
                    <Navbar.Brand href="/">
                        <img src={ZenyuLogo} 
                            width="100" 
                            height="30" 
                            // className="d-inline-block align-top" 
                            alt="Zenyu Logo"
                            style={{ filter: "brightness(0) invert(1)"}}
                            >
                            
                        </img>
                    </Navbar.Brand>
                    <Navbar.Collapse className = "justify-content-end">
                        {/* <Navbar.Text>
                            Welcome {this.state.username}
                        </Navbar.Text> */}
                        <Button onClick={() => this.handleLogout()}>Logout</Button>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default withRouter(ZenyuNavbar);