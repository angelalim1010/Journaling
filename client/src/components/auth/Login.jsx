import React, { useState, useContext, useEffect } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import AuthContext from '../../context/auth/authContext';
import ZenyuLogo from '../../img/zenyu-logo.svg';

import '../Login.css';


const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push('/homepage');
    }

    if(error === 'User already exists') {
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email : "",
    password : "",
    });

  const { email, password } = user;

  const handleChange = e => setUser({...user, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    login({
      email,
      password
    });
  };


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
              <Form onSubmit={handleSubmit}>
                  <h2 className='login-h2'>Login</h2>
                    <p>
                      <FormGroup>
                        <input
                          type='email'
                          name='email'
                          placeholder='Email'
                          value={email}
                          onChange={handleChange}
                          required />
                      </FormGroup>
                    </p>
                    <p>
                      <FormGroup>
                        <input
                          type='password'
                          name='password'
                          placeholder='Password'
                          value={password}
                          onChange={handleChange}
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
};


export default Login;