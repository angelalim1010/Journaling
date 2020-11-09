import React, { useState, useContext, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import AuthContext from '../../context/auth/authContext';
import ZenyuLogo from '../../img/zenyu-logo.svg';
import '../Signup.css';
import Login from './Login';


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
    <div className='signup-body'>
      <div className='wrapper'>
        <div className='container-fluid p-0'>
          <div className='d-flex' id='banner'>
            <img src={ZenyuLogo} alt='logo' className='img-fluid mx-md-4' />
            <h5 className='text-lowercase text-center my-md-5'>
              Heal. Thrive. Grow.
            </h5>
            <p className='text-center my-md-4'>
              <em>the journal designed for mindfulness + self-growth</em>
            </p>
          </div>
          <div className='d-flex flex-column my-md-3 mx-md-5'>
            <h3 className='text-center'>
              <strong>Create</strong> an account.
            </h3>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type='text'
                  name='FirstName'
                  placeholder='First Name'
                  value={FirstName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type='text'
                  name='LastName'
                  placeholder='Last Name'
                  value={LastName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type='email'
                  name='Email'
                  placeholder='Email'
                  value={Email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type='password'
                  name='Password'
                  placeholder='Password'
                  value={Password}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type='password'
                  name='ConfirmPassword'
                  placeholder='Confirm Password'
                  value={ConfirmPassword}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <div className='form-check'>
                  <Label check>
                    <Input type='checkbox' required />I agree to the <a href='/login'>Terms</a> &amp;{' '} <a href='/login'>Privacy Policy</a>.
                  </Label>
                </div>
              </FormGroup>
              <Button type="submit">Sign Up</Button>
            </Form>
            <p>
              Already have an account?{' '}
              <a href='/login' className='text-center mb-md-4'>
                Login here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;