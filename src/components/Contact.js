// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to backend)
    console.log(formData);
    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-form-container">
      <h2  strong className='purple'>Contact Me</h2>
      <h3 strong className='purple'>Feel Free to Share Your Thoughts !</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label strong className='purple' htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label strong className='purple' htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label strong className='purple' htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
