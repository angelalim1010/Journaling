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
      id: 1,
      link: "#features",
      label: "Features"
    },
    {
      id: 2,
      link: "#about",
      label: "About"
    },
    {
      id: 3,
      link: "/login",
      label: "Log In"
    },
    {
      id: 4,
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
