import React, { Component } from 'react';
import ZenyuLogo from '../img/zenyu-logo.svg';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
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
                <a className='btn' href='/'>
                  Read More
                </a>
              </div>
            </div>
            <div className='col-right'>
              <div className='login-form'>
                <h2 className='login-h2'>Login</h2>
                <form>
                  <p>
                    <input type='text' placeholder='Username' required />
                  </p>
                  <p>
                    <input type='text' placeholder='Password' required />
                  </p>
                  <p>
                    <input className='btn' type='submit' value='Sign In' />
                  </p>
                  Don't have an account? <a href='/signup'>Sign Up</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
