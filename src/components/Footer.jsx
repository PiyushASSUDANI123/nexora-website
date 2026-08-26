import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <h2 className="brand-name">NEXORA</h2>
              <p className="brand-sub">BALOTRA</p>
            </div>
            <p className="footer-tagline">Learn | Grow | Succeed</p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/#how-it-works">How It Works</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Courses</h4>
            <ul className="footer-links">
              <li><Link to="/courses">Financial Wisdom</Link></li>
              <li><Link to="/courses">Real Estate Wealth Building</Link></li>
              <li><Link to="/courses">Relationship Mastery</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="https://wa.me/917340094647" target="_blank" rel="noreferrer">
                  WhatsApp: 7340094647
                </a>
              </li>
              <li>Balotra, Rajasthan</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; 2026 NEXORA, Balotra. All rights reserved.
          </div>
          <div className="footer-developer">
            Built with precision by <span className="dev-name">Assudani Developer (Piyush Assudani)</span> 
            <br />
            <a href="https://wa.me/919413879444" target="_blank" rel="noreferrer" className="dev-contact">
              +91 94138 79444
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
