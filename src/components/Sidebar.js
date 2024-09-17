import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="social-links">
        <li><a href="https://github.com/YourGithub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
        <li><a href="https://linkedin.com/in/YourLinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
        <li><a href="https://twitter.com/YourTwitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
