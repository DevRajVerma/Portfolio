import React from 'react';
import '../App.css';

const ResponsiveButton = ({ text }) => {
  return (
    <div className="hero-container">
      {/* <h1>Development is my niche</h1> */}
      <button className="responsive-button">{text}</button>
    </div>
  );
};

export default ResponsiveButton;
