import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-grid">
          {/* Photographer Info Section */}
          <div className="photographer-info">
            <div className="photographer-header">
              <img
                src="/profile%20picture.jpg?height=591&width=591"
                alt="Photographer"
                className="photographer-image"
              />
              <div className="photographer-name">
                <h3>Peter Schrader</h3>
                <p>Professional Photographer</p>
              </div>
            </div>
            <p className="photographer-bio">
              With over 10 years of experience, through various locations such as NY, Japan, San Francisco, Copenhagen, I specialize in capturing life's most precious moments in nature, culture, and portraits. Let's work together to bring your vision to life!
            </p>

            {/* Contact Info Section */}
            <h2 className="section-title">Let's Get in Touch</h2>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <p>ps@photo.com</p>
              </div>
              <div className="contact-item">
                <FaPhone />
                <p>+45 40 18 80 15</p>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <p>Copenhagen, Denmark</p>
              </div>
            </div>

            {/* Social Media Section */}
            <h2 className="section-title">Social Media</h2>
            <div className="social-links">
              <a href="https://www.facebook.com/peter.c.schrader" className="social-icon">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}

        </div>
      </div>
    </div>
  );
};

export default Contact;
