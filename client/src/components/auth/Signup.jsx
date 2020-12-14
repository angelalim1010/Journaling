import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';
import isAuthenticatedUser from '../../utils/isAuthenticated'

import Navigation, { NavDefault } from '../Navigation';
import Footer from '../Footer';
import '../style/style.css';
import '../style/Auth.css';


const Signup = props => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated || isAuthenticatedUser()) {
      props.history.push('/home');
    }

    if(error === 'User already exists') {
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    FirstName : "",
    LastName : "",
    Email : "",
    Password : "",
    ConfirmPassword: ""
    });

  const { FirstName, LastName, Email, Password, ConfirmPassword } = user;

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    register({
      FirstName,
      LastName,
      Email,
      Password
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
    <Fragment>
      <NavDefault nav={nav} />
      <Container className="signup" fluid>
        <Col id="signup" className="wrapper">
          <Col className="text-center" xs={6} md={4}>
            <h3>heal. thrive. grow.</h3>
            <h5><strong>Create</strong> an account.</h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='text'
                      name='FirstName'
                      placeholder='First Name'
                      value={FirstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='text'
                      name='LastName'
                      placeholder='Last Name'
                      value={LastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='email'
                      name='Email'
                      placeholder='Email'
                      value={Email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='password'
                      name='Password'
                      placeholder='Password'
                      value={Password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='password'
                      name='ConfirmPassword'
                      placeholder='Confirm Password'
                      value={ConfirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group className="text-center">
                    <Form.Check type='checkbox' label="By checking this box, I agree to the Terms of Service, Disclaimer, and Privacy Policy." required/>
                </Form.Group>
                  <p>
                    Click here for the <a href="/terms" target="_blank" >Terms of Service</a>, <a href="/disclaimer">Disclaimer</a>, & <a href="/privacy"> Privacy Policy</a>.
                  </p>
                    <Button className="btn-custom" type="submit">Sign Up</Button>
                <p>
                  Already have an account?{' '}
                  <a href='/login' className='text-center mb-md-4'>
                  Login here.
                </a>
              </p>
            </Form>
          </Col>
        </Col>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Signup;