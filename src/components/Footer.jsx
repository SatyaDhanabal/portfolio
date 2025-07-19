import React from 'react';
import '../styles/Footer.css'; // ✅ correct path

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Satya. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
