import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="social-icons">
        <a href="#" className="icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

