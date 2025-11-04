import React, { useState, useEffect } from 'react';
import '../assets/css/Projects.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const projects = [
    {
      title: 'Desktop Pet App & Landing Page',
      description: 'A desktop companion app featuring an animated pet that roams your screen with AI-powered assistant, productivity tools, and interactive animations. Includes a marketing landing page for Windows and macOS distribution.',
      features: [
        'AI-Powered Assistant: Chat via text or voice using OpenAI API with weather queries, timer commands, and general questions.',
        'Interactive Pet Animations: Multiple animation states with personality-driven behaviors including idle, walk, run, sleep, eat, and attack modes.',
        'Productivity Tools: Built-in Pomodoro timer, custom reminders, focus tracking, and weather information integration with privacy-focused local data storage.'
      ],
      tech: ['Python', 'PyQt6', 'Pygame', 'OpenAI API', 'SpeechRecognition', 'PyAudio'],
      github: 'https://github.com/EdithHarrison/desktop-pet-landing',
      external: 'https://desktoppet.app/',
      images: [
        require('../assets/images/DesktopPet.png'),
        require('../assets/images/DesktopPet1.png'),
        require('../assets/images/DesktopPet2.png')
      ]
    },
    {
      title: 'Learning Hub',
      description: 'An educational platform designed to support students and teachers. Built as a group project where I served as the backend developer, implementing authentication and core infrastructure.',
      features: [
        'Backend Development: Implemented Firebase Authentication system for secure user management.',
        'API Documentation: Created comprehensive Swagger API documentation for all backend endpoints.',
        'Database & Infrastructure: Designed Firestore database structure and built Express.js server with RESTful API endpoints.'
      ],
      tech: ['Firebase', 'Firestore', 'Express.js', 'React', 'Vite', 'Node.js'],
      github: 'https://github.com/Code-the-Dream-School/gg-pac-team3-monorepo',
      external: null,
      images: [
        require('../assets/images/learninghub.png'),
        require('../assets/images/learninghub1.png'),
        require('../assets/images/learninghub2.png')
      ]
    },
    {
      title: "Traveler's Planner",
      description: 'A travel planning app that helps organize trips with itinerary management, packing checklist, and budget tracker. Integrated with Airtable for cloud-based data storage.',
      features: [
        'Trip Management: Create, edit, and organize travel plans with full itinerary management.',
        'Interactive Features: Packing checklist and budget tracker to keep trips organized and within budget.',
        'Cloud Integration: Airtable API integration for seamless data persistence with sorting and pagination.'
      ],
      tech: ['React 18', 'React Router DOM', 'Vite', 'Airtable API', 'CSS Modules', 'React Icons'],
      github: 'https://github.com/EdithHarrison/TravelersPlanner',
      external: 'https://travelersplanner.onrender.com/',
      images: [
        require('../assets/images/TravelApp.png'),
        require('../assets/images/TravelApp1.png'),
        require('../assets/images/TravelApp2.png')
      ]
    },
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
    {
      title: 'Personal Project Portfolio',
      description: 'A personal portfolio website showcasing my projects, skills, and experience. Built with React.js to demonstrate my frontend development capabilities.',
      features: [
        'Project Showcase: Features an interactive gallery of my projects and skills.',
        'Smooth Animations: Includes subtle animations and transitions for a polished feel.'
      ],
      tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/EdithHarrison/my-portfolio', 
      external: 'https://edithfullstack.onrender.com/', 
      images: [
        require('../assets/images/portfolio.png'),
        require('../assets/images/portfolio1.png'),
        require('../assets/images/portfolio2.png')
      ]
    }
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const ProjectCard = ({ project, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset image index when project changes
    useEffect(() => {
      setCurrentImageIndex(0);
    }, [project.title]);

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
      <div className="project-card">
        <div className={`project-inner ${index % 2 !== 0 ? 'reverse' : ''}`}>
          <div className="image-section">
            <div className="image-slider">
              <div className="image-wrapper">
                <img src={project.images[currentImageIndex]} alt={`${project.title} screenshot ${currentImageIndex + 1}`} />
                <div className="image-overlay"></div>
              </div>
              <button onClick={prevImage} className="slider-button left" aria-label="Previous image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button onClick={nextImage} className="slider-button right" aria-label="Next image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
              <div className="image-counter">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>
            <ul className="project-tech-list">
              {project.tech.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="project-content">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                {project.external && (
                  <a href={project.external} aria-label="External Link" target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                )}
              </div>
            </div>
            <div className="project-description">
              <p>
                {project.description}
              </p>
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
          </div>
        </div>
      </div>
    );
  };

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className={`projects-section scroll-animate ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2 className="numbered-heading" data-number="03.">Some Things I've Built</h2>
      <div className="projects-carousel">
        <button 
          className="project-nav-button prev" 
          onClick={prevProject}
          aria-label="Previous project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div className="projects-container">
          <ProjectCard project={projects[currentProjectIndex]} index={currentProjectIndex} />
        </div>
        <button 
          className="project-nav-button next" 
          onClick={nextProject}
          aria-label="Next project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <div className="project-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentProjectIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentProjectIndex(index);
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;