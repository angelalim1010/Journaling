import React, { Component } from 'react';

import Navigation from './landing/Navigation.jsx';
import Header from './landing/Header.jsx';
import Features from './landing/Features.jsx';
import About from './landing/About.jsx';
import Footer from './landing/Footer.jsx';

import './landing/Landing.css'


class Landing extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Features />
        <About />
        <Footer />
      </div>
    )
  }
};

export default Landing
