// src/components/Header.js
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Get In Touch</a></li>
        </ul>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/dev-raj-verma-310ab21b4/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="https://x.com/Dev91854734/"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/dev__raj_verma/"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
