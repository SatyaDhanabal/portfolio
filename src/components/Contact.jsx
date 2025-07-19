import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const email = 'satyadhanabal209@gmail.com';
  
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    // Optional: Add a temporary success message
    const button = document.querySelector('.copy-btn');
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Email: <span id="email">{email}</span></p>
      <button className="copy-btn" onClick={copyEmail}>Copy Email</button>
      
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/satya-dhanabal" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/SatyaDhanabal" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        
      </div>
      
      <button className="resume-btn">Download Resume</button>
    </section>
  );
};

export default Contact;