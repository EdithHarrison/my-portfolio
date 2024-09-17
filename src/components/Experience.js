import React, { useState, useEffect } from 'react';
import '../assets/css/Experience.css';

import AppenImage from '../assets/images/Appen.png';
import CodeTheDreamImage from '../assets/images/CodeTheDream.png';
import HarteHanksImage from '../assets/images/HarteHanks.png';
import ReynoldsImage from '../assets/images/Reynolds.png';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "Code the Dream",
      role: "Practicum Backend Developer",
      date: "Jul 2024 – Sept 2024",
      description: [
        "Built and integrated backend features using Node.js and Firebase, ensuring real-time data management and secure user authentication.",
        "Utilized GitHub for version control and team collaboration, conducting code reviews and ensuring smooth integration.",
        "Successfully delivered a Minimum Viable Product (MVP), focusing on user-friendly functionality."
      ],
      image: CodeTheDreamImage,
      url: "https://www.codethedream.org"
    },
    {
      company: "Appen",
      role: "Social Media Specialist",
      date: "Sep 2018 – Dec 2023",
      description: [
        "Content Analysis: Analyzed media sources, including websites and ads, to ensure quality and relevance.",
        "Skill Development: Developed strong data analysis, problem-solving, and attention to detail, translating into technical roles."
      ],
      image: AppenImage,
      url: "https://www.appen.com"
    },
    {
      company: "Reynolds Community College",
      role: "Social Media Specialist",
      date: "Sep 2017 – Sep 2018",
      description: [
        "Media Management: Managed and adjusted electronic equipment for media presentations and events.",
        "Collaboration: Collaborated on content creation and troubleshooting technical issues for successful media execution."
      ],
      image: ReynoldsImage,
      url: "https://www.reynolds.edu"
    },
    {
      company: "Harte Hanks",
      role: "Technical Support Representative",
      date: "Oct 2015 – Dec 2016",
      description: [
        "Technical Support: Provided troubleshooting and technical support for desktops, laptops, and A/V equipment, ensuring timely resolution of issues.",
        "Customer Satisfaction: Exceeded customer satisfaction metrics by consistently resolving technical challenges efficiently."
      ],
      image: HarteHanksImage,
      url: "https://www.hartehanks.com"
    }
  ];

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section id="experience">
      <h2 className="numbered-heading" data-number="02.">Where I've Worked</h2>
      <div className="experience-content">
        <div className="company-list">
          {experiences.map((experience, index) => (
            <button
              key={index}
              className={`company-tab ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={experience.image} alt={experience.company} />
              <span>{experience.company}</span>
            </button>
          ))}
        </div>
        <div className="job-info">
          <h3>
            <span className="job-role">{experiences[activeIndex].role}</span>
            <span className="job-company">
              &nbsp;@&nbsp;
              <a href={experiences[activeIndex].url} target="_blank" rel="noopener noreferrer">
                {experiences[activeIndex].company}
              </a>
            </span>
          </h3>
          <p className="job-duration">{experiences[activeIndex].date}</p>
          <ul className="job-description">
            {experiences[activeIndex].description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;