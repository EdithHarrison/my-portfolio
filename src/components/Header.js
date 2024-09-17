import React from 'react';
import '../assets/css/Header.css';
import EdithLogo from '../assets/images/edithlogo.png'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <a href="#home">
            <img src={EdithLogo} alt="Edith Logo" className="logo-img" />
          </a>
        </div>
        <ul className="nav-links">
        <li><a href="#about"><span>01.</span>About</a></li>
        <li><a href="#experience"><span>02.</span>Experience</a></li>
        <li><a href="#projects"><span>03.</span>Projects</a></li>
        <li><a href="#connect"><span>04.</span>Connect</a></li>
        <li><a href="/resume" className="resume-button">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;