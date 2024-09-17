import React from 'react';
import '../assets/css/Intro.css'

const Intro = () => {
  return (
    <section id="home" className="intro-section">
      <h1>Hi, my name is</h1>
      <h2 className="big-heading">Edith Harrison.</h2>
      <h3 className="big-heading">Designing and developing for the web</h3>
      <p>
        I'm a full stack developer passionate about crafting interactive websites and delivering seamless, user-friendly experiences for the web.
      </p>
      <a href="#projects" className="button">Check out my projects!</a>
    </section>
  );
};

export default Intro;