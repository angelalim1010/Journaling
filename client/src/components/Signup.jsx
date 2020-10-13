import React, { Component } from 'react';
import ZenyuLogo from '../img/zenyu-logo.svg';

import './Signup.css';

class Signup extends Component {
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
              <form method='post'>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    name='name'
                    placeholder='Name'
                  />
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='password'
                    name='password-repeat'
                    placeholder='Confirm Password'
                  />
                </div>
                <div className='form-group'>
                  <div className='form-check'>
                    <label className='form-check-label'>
                      <input className='form-check-input' type='checkbox' />I
                      agree to the Terms &amp; Privacy Policy.
                    </label>
                  </div>
                </div>
                <div className='form-group'>
                  <button className='btn btn-dark btn-block' type='submit'>
                    Sign Up
                  </button>
                </div>
              </form>
              <a href='/login' className='text-center mb-md-4'>
                Already have an account? Login here.
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
