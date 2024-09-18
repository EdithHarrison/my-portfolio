import React, { useState } from 'react';
import '../assets/css/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Saver Sub',
      description: 'A subscription management app designed to help you save money by keeping track of all your online subscriptions in one place.',
      features: [
        'Comprehensive Tracking: Monitor all your subscriptions in one dashboard.',
        'Cancellation Reminders: Receive notifications before your subscriptions renew.'
      ],
      tech: ['Node.js', 'Express', 'EJS', 'HTML', 'CSS', 'MongoDB'],
      github: 'https://github.com/EdithHarrison/SaverSub',
      external: 'https://saversub-1.onrender.com/',
      images: [
        require('../assets/images/saversub.png'),
        require('../assets/images/saversub1.png'),
        require('../assets/images/saversub2.png')
      ] 
    },
    // Add more projects here
  ];

  const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    };

    return (
      <li className="project">
        <div className="project-inner">
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-description">
              <p>{project.description}</p>
              {project.features && (
                <>
                  <h4>Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <ul className="project-tech-list">
              {project.tech.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href={project.external} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
          <div className="image-slider">
            <img src={project.images[currentImageIndex]} alt={`${project.title} screenshot ${currentImageIndex + 1}`} />
            <button onClick={prevImage} className="slider-button left">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button onClick={nextImage} className="slider-button right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </li>
    );
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="numbered-heading" data-number="03.">Some Things I've Built</h2>
      <ul className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;