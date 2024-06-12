// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#recent-work">Recent Work</a></li>
          <li><a href="#contact">Get In Touch</a></li>
        </ul>
        <div className="social-links">
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.behance.net"><i className="fab fa-behance"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
