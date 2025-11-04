import React from 'react';
import '../assets/css/About.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className={`about-section scroll-animate ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2 className="numbered-heading" data-number="01.">About Me</h2>
      <div className="inner">
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm Edith, a passionate full stack developer who thrives on turning ideas into interactive, 
              functional, and visually appealing digital experiences. My journey in web development began during my time at a community college, 
              where I took my first web design class. What started as curiosity quickly evolved into a fascination with programming.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="skills-list">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Express</li>
              <li>Firebase</li>
              <li>MongoDB</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Playwright</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="about-pic">
            <img src={require('../assets/images/profilepic.png')} alt="Edith Harrison" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;