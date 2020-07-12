import React from 'react';
import './App.css';
import Home from './containers/home';
import Navbar from './components/mainComponents/navbar';
import Contact from './components/mainComponents/contact';
import Footer from './components/mainComponents/footer';

function mainApp(){
  return(
    <>
      <Navbar />
      <Home />
      <Contact />
      <br />
      <Footer />
    </>
  )
}

export default mainApp;
