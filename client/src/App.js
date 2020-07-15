import React from 'react';
import Navbar from './components/mainComponents/navbar';
import Routes from  './routes';
import Footer from './components/mainComponents/footer';
import {BrowserRouter as Router} from 'react-router-dom';

function mainApp(){
  return(
    <>
      <div id="page-container" className="w-full m-0 p-0 bg-gray-100 grid grid-cols-1">
          <div id="main-content" className="min-h-screen">
              <Router>
                  <Navbar />
                  <Routes />
              </Router>
          </div>
          <Footer />
      </div>
    </>
  )
}

export default mainApp;
