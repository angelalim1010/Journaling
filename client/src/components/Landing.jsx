import React, { Component } from 'react';

import Navigation, { NavDefault } from './Navigation';
import Header from './landing/Header';
import Features from './landing/Features';
import About from './landing/About';
import Footer from './Footer';

import './style/style.css';
import './style/Landing.css';


const Landing = () => {
  const nav = [
    {
      link: "#features",
      label: "Features"
    },
    {
      link: "#about",
      label: "About"
    },
    {
      link: "/login",
      label: "Log In"
    },
    {
      link: "/signup",
      label: "Sign Up"
    }
]
  return (
    <>
      <NavDefault nav={nav} />
      <Header />
      <Features />
      <About />
      <footer className="footer"><Footer /></footer>
    </>
  )
};

export default Landing
