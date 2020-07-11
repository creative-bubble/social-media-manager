import React from 'react';
import './App.css';
import Home from './containers/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

function mainApp(){
  return(
    <>
      <Navbar />
      <Home />
      <div class="h-88">
        {/* contact us here to-follow*/}
      </div>
      <Footer />
    </>
  )
}

export default mainApp;
