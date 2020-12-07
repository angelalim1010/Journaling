import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';

import Navigation, { NavDefault } from '../Navigation';
import Footer from '../Footer';
import '../style/style.css';
import '../style/Auth.css';


const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push('/home');
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

  const nav = [
    {
      id: 1,
      link: "/login",
      label: "Log In"
    },
    {
      id: 2,
      link: "/signup",
      label: "Sign Up"
    }
]

  return (
    <>
      <NavDefault nav={nav} />
      <Container className="login" fluid>
        <Col id="login" className="wrapper">
          <Col className="text-center" xs={6} md={4}>
            <h3>heal. thrive. grow</h3>
            <h5><strong>Welcome back.</strong></h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='email'
                      name='email'
                      placeholder='Email'
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='password'
                      name='password'
                      placeholder='Password'
                      value={password}
                      onChange={handleChange}
                      required
                    />
                </Form.Row>
                </Form.Group>
                <p></p>
                <Button className="btn-custom" type="submit">Log In</Button>
                <p>
                  Don't have an account? <a href='/signup'>Sign Up</a>
                </p>
              </Form>

          </Col>
        </Col>
      </Container>
      <Footer />
    </>
  )
}

export default Login;