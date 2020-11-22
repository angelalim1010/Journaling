import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';

import Navigation from '../legal/Navigation';
import Footer from '../Footer';
import '../style/style.css';
import '../style/Signup.css';


const Signup = props => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push('/homepage');
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

  return (
    <div>
      <Navigation />
      <Container className="signup" fluid>
        <Col className="justify-content-center wrapper">
          <Col className="text-center" md="6">
            <h3>heal. thrive. grow.</h3>
            <h5><strong>Create</strong> an account.</h5>
          </Col>
          <Row className="justify-content-center">
            <Col className="text-center" xs={6} md={5}>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type='text'
                    name='FirstName'
                    placeholder='First Name'
                    value={FirstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='text'
                    name='LastName'
                    placeholder='Last Name'
                    value={LastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='email'
                    name='Email'
                    placeholder='Email'
                    value={Email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='password'
                    name='Password'
                    placeholder='Password'
                    value={Password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type='password'
                    name='ConfirmPassword'
                    placeholder='Confirm Password'
                    value={ConfirmPassword}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="text-center">
                    <Form.Check type='checkbox' label="By checking this box, I indicate that I have read and agree to Zenyu's Terms of Service, Disclaimer, and Privacy Policy" required/>
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
          </Row>
        </Col>
      </Container>
      <Footer />
    </div>
  );
};

export default Signup;