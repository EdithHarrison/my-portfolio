import React, { useState } from 'react';
import '../assets/css/Header.css';
import EdithLogo from '../assets/images/edithlogo.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <a href="#home" onClick={closeMenu}>
            <img src={EdithLogo} alt="Edith Logo" className="logo-img" />
          </a>
        </div>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={closeMenu}><span>01.</span>About</a></li>
        <li><a href="#experience" onClick={closeMenu}><span>02.</span>Experience</a></li>
        <li><a href="#projects" onClick={closeMenu}><span>03.</span>Projects</a></li>
        <li><a href="#connect" onClick={closeMenu}><span>04.</span>Connect</a></li>
        <li><a href="/resume" className="resume-button" onClick={closeMenu}>Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;