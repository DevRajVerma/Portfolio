import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sz90eii', 'template_fnekr9o', e.target, 'aG77XjKU30MIDXyqD')
      .then((result) => {
        setStatusMessage('Message sent successfully!');
        setFormData({ email: '', mobile: '', message: '' });
      }, (error) => {
        setStatusMessage('There was an error sending your message.');
      });
  };

  return (
    <div id="contact" className="contact-page">
      <h1>Get In Touch</h1>
      <p>Want to connect? Drop a message and let’s make things happen!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Please enter your email"
            size="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile (Optional)</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit <span></span></button>
      </form>
      
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default ContactPage;
