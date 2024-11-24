import React from 'react';
import './Contact.css';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';


const ContactPage = () => {
  return (
    <div id="contact" className="contact-page">
      <h1>Get In Touch</h1>
      <p>Want to connect? Drop a message and let’s make things happen!</p>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Please enter your email" size="5" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile (Optional)</label>
          <input type="tel" id="mobile" name="mobile" placeholder="Enter mobile" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit <span></span></button>
      </form>
      
    </div>
  );
};

export default ContactPage;
