import { forwardRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="contact-page">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <div className="contact-grid">
          <div className="photographer-info">
            <div className="photographer-header">
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Photographer"
                className="photographer-image"
              />
              <div className="photographer-name">
                <h3>John Doe</h3>
                <p>Professional Photographer</p>
              </div>
            </div>
            <p className="photographer-bio">
              With over 10 years of experience, I specialize in capturing life's most precious moments. Let's create something beautiful together!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <p>john.doe@example.com</p>
              </div>
              <div className="contact-item">
                <FaPhone />
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <p>123 Photography Street, City, Country</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows={4}></textarea>
              <button type="submit">Send Message</button>
            </form>
            <div className="social-links">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
