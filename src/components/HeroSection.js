// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="text-and-image">
        <div className="intro-text">
          <h1>Dev Raj Verma</h1>
          <p>Full Stack Web Development is my niche</p>
          <a href="#contact" className="cta-button">Let’s get started</a>
        </div>
        <div className="profile-picture">
          <img src="profile-pic.png" alt="Your Name" />
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
