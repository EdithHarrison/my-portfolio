import React from 'react';
import '../assets/css/Header.css';
import EdithLogo from '../assets/images/edithlogo.png'; 

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          {/* Logo added to the left side */}
          <li className="logo">
            <a href="#home">
              <img src={EdithLogo} alt="Edith Logo" className="logo-img" />
            </a>
          </li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
