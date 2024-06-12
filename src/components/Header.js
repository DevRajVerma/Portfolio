// src/components/Header.js
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          {/* <li><a href="#recent-work">Recent Work</a></li> */}
          <li><a href="#contact">Get In Touch</a></li>
        </ul>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/dev-raj-verma-310ab21b4/"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
          {/* <a href="https://www.behance.net"><FontAwesomeIcon icon="fa-brands fa-behance" /></a> */}
          <a href="https://x.com/Dev91854734/"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
          <a href="https://www.instagram.com/dev__raj_verma/"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
          <a href="facebook.com"></a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
