// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import ResponsiveButton from './ResponsiveButton';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';


const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="text-and-image">
        <div className="intro-text">
          <h1 className="landbc">Dev Raj Verma</h1>
          {/* <h2>Full Stack Web Developer</h2> */}
          <p>
          A passionate and dedicated Full Stack Web Developer. My journey in web development has been fueled by a love for creating seamless user experiences and efficient backend solutions. I'm eager to bring my technical knowledge, creativity, and enthusiasm to innovative projects. Please feel free to get in touch if you'd like to discuss potential collaborations or opportunities.
          </p>
          {/* <a href="#contact" >Let’s get started</a> */}
          <a href="#contact"> <ResponsiveButton text="Let's get Started"/></a>
          
        </div>
        <div className="profile-picture">
          <img src="profile-pic.png" alt="Your Name" className="lode"/>
        </div>

        </div>
        
      </div>
      <div className="worked-with">
        <h2>Worked with</h2>
        <div className="logos">
          <img src="Worked-with/Clickup.png" alt="ClickUp" />
          <img src="Worked-with/Dropbox.png" alt="Dropbox" />
          <img src="Worked-with/PayChex.png" alt="Paychex" />
          <img src="Worked-with/Elastic.png" alt="Elastic" />
          <img src="Worked-with/Stripe.png" alt="Stripe" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
