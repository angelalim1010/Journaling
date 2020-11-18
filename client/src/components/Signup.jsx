import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import ZenyuLogo from '../img/zenyu-logo.svg';
import './Signup.css';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName : "",
      LastName : "",
      Email : "",
      Password : "",
      ConfirmPassword: "",
      registrationErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const {
      FirstName,
      LastName,
      Email,
      Password,
      ConfirmPassword
    } = this.state;

    axios.post('https://zenyu-backend.herokuapp.com/api/users/register', {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Password: Password,
      ConfirmPassword: ConfirmPassword
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
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Input
                    type='text'
                    name='FirstName'
                    placeholder='First Name'
                    value={this.state.FirstName}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type='text'
                    name='LastName'
                    placeholder='Last Name'
                    value={this.state.LastName}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type='email'
                    name='Email'
                    placeholder='Email'
                    value={this.state.Email}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type='password'
                    name='Password'
                    placeholder='Password'
                    value={this.state.Password}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type='password'
                    name='ConfirmPassword'
                    placeholder='Confirm Password'
                    value={this.state.ConfirmPassword}
                    onChange={this.handleChange}
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
    )
  }
}

export default Signup;
