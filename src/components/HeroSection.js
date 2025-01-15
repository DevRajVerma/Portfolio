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
          Let’s build your first MVP! Whether it’s a website or a MERN project, I’ll help bring your ideas to life and turn your vision into reality.
          </p>
          {/* <a href="#contact" >Let’s get started</a> */}
          <a href="#case-studies"> <ResponsiveButton text="Let's get Started"/></a>
          
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
