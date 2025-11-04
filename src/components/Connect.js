import React from 'react';
import '../assets/css/Connect.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Connect = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="connect" className={`connect-section scroll-animate ${isVisible ? 'visible' : ''}`} ref={ref}>
   <h2 className="numbered-heading" data-number="04.">What's Next?</h2>
      <h2 className="connect-title">Get In Touch</h2>
      <p className="connect-description">
        I'm not looking for job opportunities right now, but I'm open for project collaborations and side projects that are cool and AI-related.
        Whether you have an interesting project idea, want to collaborate on something innovative, or simply want to connect, feel free to reach out. I'll do my best to respond promptly.
      </p>
      <a className="connect-button" href="mailto:edithharrison.dev@gmail.com">Say Hello</a>
    </section>
  );
};

export default Connect;