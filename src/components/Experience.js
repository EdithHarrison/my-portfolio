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
      date: "Feb 2024 – Jun 2024",
      description: [
        "Backend Development: Built and integrated backend features using Node.js and Firebase, ensuring real-time data management and secure user authentication.",
        "Version Control & Collaboration: Utilized GitHub for version control and team collaboration, conducting code reviews and ensuring smooth integration.",
        "MVP Delivery: Successfully delivered a Minimum Viable Product (MVP), focusing on user-friendly functionality."
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
      company: "J Sargeant Reynolds Community College",
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

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="experience">
      <h2 className="numbered-heading">Where I've Worked</h2>
      <div className="experience-container">
        {/* Company names clickable list */}
        <div className="clickable-column">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`companyName clickable ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <p>{exp.company}</p>
            </div>
          ))}
        </div>

        {/* Experience details */}
        <div className="description-column">
          <div className="description">
            <h3>{experiences[activeIndex].role}</h3>
            <p className="company-date">{experiences[activeIndex].date}</p>
            <ul>
              {experiences[activeIndex].description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Clickable company image */}
        <div className="company-column">
          <a href={experiences[activeIndex].url} target="_blank" rel="noopener noreferrer">
            <img src={experiences[activeIndex].image} alt={experiences[activeIndex].company} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
