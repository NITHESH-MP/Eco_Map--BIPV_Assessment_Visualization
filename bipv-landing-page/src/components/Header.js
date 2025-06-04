import React, { useState, useEffect } from 'react';
import './styles/Header.css';
import logo from '../assets/logo.png';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo"><img src={logo} alt="Logo" />ROOKIE's ECOMAP</div>
      <nav className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#features">Services</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
