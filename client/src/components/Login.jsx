import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import ZenyuLogo from '../img/zenyu-logo.svg';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email : "",
      password : ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange =  this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const {
      email,
      password,
    } = this.state;

    axios.post('https://zenyu-backend.herokuapp.com/api/users/authenticate', {
      email: email,
      password: password,
    }
    )
    .then(response => {
      console.log("registration res", response);
    })
    .catch(error => {
      console.log("registration error", error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className='login-body'>
        <div className='login-wrapper'>
          <div className='login-container'>
            <div className='col-left'>
              <div className='login-text'>
                <img src={ZenyuLogo} alt='logo' className='sign-in-logo' />
                <p>The journal designed for mindfulness and self-growth</p>
                <a className='read-btn' href='/'>
                  Read More
                </a>
              </div>
            </div>
            <div className='col-right'>
              <div className='login-form'>
                <Form onSubmit={this.handleSubmit}>
                  <h2 className='login-h2'>Login</h2>
                    <p>
                      <FormGroup>
                        <input
                          type='email'
                          name='email'
                          placeholder='Email'
                          value={this.state.email}
                          onChange={this.handleChange}
                          required />
                      </FormGroup>
                    </p>
                    <p>
                      <FormGroup>
                        <input
                          type='password'
                          name='password'
                          placeholder='Password'
                          value={this.state.password}
                          onChange={this.handleChange}
                          required />
                      </FormGroup>
                    </p>
                    <p>
                      <Button type='submit'>Sign In</Button>
                    </p>
                    Don't have an account? <a href='/signup'>Sign Up</a>
                 </Form>
                </div>
              </div>
           </div>
        </div>
      </div>
    );
  }
}

export default Login;
