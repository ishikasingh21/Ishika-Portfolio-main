import React from 'react';
import './Contact.css';
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 strong className='purple'>CONTACT ME</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="social-card">
        <h2 strong className='purple'>FIND ME ON</h2>
        <div className="social-links">
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/ishikasingh21"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ishika-singh-a43b78232/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ishh.ikaa/?next=%2F"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
          <p>OR




            
          </p>
          <p>ishika003.singh@gmail.com</p>
          <p>+91 9997749057</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
