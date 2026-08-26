import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`nav-capsule-container ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-capsule">
        <NavLink to="/" className="nav-brand">
          <img src="/logo.png" alt="NEXORA Logo" style={{ height: '36px', width: 'auto' }} />
          <div className="brand-text">
            <span className="brand-name">NEXORA</span>
            <span className="brand-sub">BALOTRA</span>
          </div>
        </NavLink>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/courses" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsOpen(false)}>Courses</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>

        <div className="nav-actions">
          <a href="https://wa.me/917340094647" className="btn-nav-cta">
            Join Now
          </a>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
