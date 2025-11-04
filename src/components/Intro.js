import React, { useState, useEffect } from 'react';
import '../assets/css/Intro.css'

const Intro = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const AnimatedText = ({ text, delay = 0, className = '' }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (!mounted) return;
      
      let timeout;
      
      if (isPaused) {
        // Pause before restarting
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(false);
          setCurrentIndex(0);
          setDisplayedText('');
        }, 1000);
      } else if (isDeleting) {
        if (displayedText.length > 0) {
          // Delete one character at a time with same 20ms delay as typing
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
            setCurrentIndex(prev => prev - 1);
          }, 20);
        } else {
          setIsPaused(true);
        }
      } else {
        // Typing phase
        if (currentIndex < text.length) {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev + text[currentIndex]);
            setCurrentIndex(prev => prev + 1);
          }, delay + (currentIndex * 20));
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      }

      return () => {
        if (timeout) clearTimeout(timeout);
      };
    }, [currentIndex, text, delay, mounted, isDeleting, isPaused, displayedText.length]);

    return (
      <span className={className}>
        {displayedText}
        <span className="cursor">|</span>
      </span>
    );
  };

  return (
    <section id="home" className="intro-section">
      <div className="intro-content">
        <div className="intro-text-wrapper">
          <h1 className={mounted ? 'fade-in' : ''}>Hi, my name is</h1>
          <h2 className={`big-heading ${mounted ? 'fade-in' : ''}`}>
            <AnimatedText text="Edith Harrison." delay={200} />
          </h2>
          <h3 className={`big-heading ${mounted ? 'fade-in' : ''}`}>
            Designing and developing for the web
          </h3>
          <p className={mounted ? 'fade-in-delayed' : ''}>
            I'm a full stack developer passionate about crafting interactive websites and delivering seamless, user-friendly experiences for the web.
          </p>
          <a href="#projects" className={`button ${mounted ? 'fade-in-delayed' : ''}`}>
            Check out my projects!
          </a>
        </div>
        <div className="intro-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;