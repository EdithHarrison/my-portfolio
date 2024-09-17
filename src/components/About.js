import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <div className="about-text">
          <p>
            Hello! My name is Edith and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try editing 
            custom Tumblr themes — turns out hacking together a custom reblog button taught me 
            a lot about HTML & CSS!
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