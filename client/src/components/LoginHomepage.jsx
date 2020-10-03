import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {Navbar, Card} from 'react-bootstrap';
import ZenyuLogo from '../img/zenyu-logo.svg';

import './LoginHomepage.css';
import 'react-calendar/dist/Calendar.css';
class LoginHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date()
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange = date =>{
      this.setState({
          date: date
      })
  }
  render() {
    return (
      <div>
          <Navbar>
                <Navbar.Brand href="/">
                    <img src={ZenyuLogo} 
                        width="30" 
                        height="30" 
                        className="d-inline-block align-top" 
                        alt="Zenyu Logo">
                    </img>
                </Navbar.Brand>
          </Navbar>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
      </div>
    );
  }
}

export default LoginHomepage;
