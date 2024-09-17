import React from 'react';

const Intro = () => {
  return (
    <section id="home" className="intro-section">
      <h1>Hi, my name is</h1>
      <h2 className="big-heading">Edith Harrison.</h2>
      <h3 className="big-heading">I build things for the web.</h3>
      <p>
        I'm a full stack developer specializing in building (and occasionally designing) 
        exceptional digital experiences. Currently, I'm focused on building accessible, 
        human-centered products at Upstatement.
      </p>
      <a href="#projects" className="button">Check out my projects!</a>
    </section>
  );
};

export default Intro;