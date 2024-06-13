// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#case-studies" onClick={toggleMenu}>Case Studies</a></li>
          <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Get In Touch</a></li>
        </ul>
        <div className="social-links" >
          <a href="https://www.linkedin.com/in/dev-raj-verma-310ab21b4/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="https://x.com/Dev91854734/"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/dev__raj_verma/"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
