import React from 'react';
import '../App.css';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';


const ResponsiveButton = ({ text }) => {
  return (
    <div className="hero-container">
      {/* <h1>Development is my niche</h1> */}
      <button className="responsive-button">{text}</button>
    </div>
  );
};

export default ResponsiveButton;
