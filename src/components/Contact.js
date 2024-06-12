import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div id="contact" className="contact-page">
      <h1>Get In Touch</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Please enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input type="tel" id="mobile" name="mobile" placeholder="Enter mobile" required />
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
