import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <div className="about-text">
          <p>
            Hi, I'm Edith, a passionate Full Stack Developer who thrives on turning ideas into interactive, 
            functional, and visually appealing digital experiences. My passion for web development started during my time at a community college, 
            where I took my first web design class. What started as a curiosity quickly turned into a fascination with programming.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="about-pic">
          <div className="wrapper">
            <img src="path/to/your/image.jpg" alt="Edith Harrison" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;