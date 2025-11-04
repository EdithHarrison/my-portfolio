import React, { useState, useEffect } from 'react';
import '../assets/css/Experience.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import SASImage from '../assets/images/SAS.png';
import AppenImage from '../assets/images/Appen.png';
import CodeTheDreamImage from '../assets/images/CodeTheDream.png';
import HarteHanksImage from '../assets/images/HarteHanks.png';
import ReynoldsImage from '../assets/images/Reynolds.png';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "SAS Institute",
      role: "Software Developer Apprentice",
      date: "Jan 2025 – Present • Work Experience Trainee",
      description: [
        "Resolved critical bug tickets and improved UI accessibility by collaborating with engineers and UX professionals, implementing unit tests for all bug fixes.",
        "Achieved 80% end-to-end test coverage per component using Jest and Playwright, improving application reliability.",
        "Developed automated UI test frameworks with Pytest and Python for Risk Cirrus, preventing critical bugs before production.",
        "Built feature pages for Risk Engine using Risk Cirrus Builder, integrating RESTful APIs and interactive UI components."
      ],
      image: SASImage,
      url: "https://www.sas.com"
    },
    {
      company: "Code the Dream",
      role: "Software Developer, CTD Labs",
      date: "Dec 2024 – Present • Apprenticeship",
      description: [
        "Contributed to projects that simplified access to public benefits using Next.js, TypeScript, React, LangChain, and OpenAI.",
        "Built user-facing components and AI-driven features to enhance user engagement.",
        "Contributed to Next.js applications with multilingual support and PWA capabilities using Tailwind CSS, next-intl, Airtable, and next-pwa.",
        "Collaborated using GitHub and agile/scrum methodologies, participating in daily standups, sprint planning, and code reviews."
      ],
      image: CodeTheDreamImage,
      url: "https://www.codethedream.org"
    },
    {
      company: "Appen",
      role: "Social Media Evaluator / Data AI Annotation",
      date: "Sep 2018 – Dec 2023 • Independent Contractor",
      description: [
        "Evaluated social media content to ensure compliance with guidelines, protecting users from misleading information.",
        "Curated and annotated data to improve AI model performance and training accuracy.",
        "Analyzed website articles and advertisements for quality and relevance using data-driven processes.",
        "Provided feedback that improved product releases and user engagement."
      ],
      image: AppenImage,
      url: "https://www.appen.com"
    },
    {
      company: "Reynolds Community College",
      role: "Media Specialist",
      date: "Dec 2017 – Jul 2018",
      description: [
        "Provided technical support for special events, ensuring successful multimedia presentations and video conferencing free from technical issues.",
        "Troubleshot, maintained, and managed inventory of technology equipment, keeping systems operational and ready for use.",
        "Responded to technical requests using ticketing system, resolving pending issues and maintaining service quality."
      ],
      image: ReynoldsImage,
      url: "https://www.reynolds.edu"
    },
    {
      company: "Harte Hanks",
      role: "Technical Support Representative",
      date: "Oct 2015 – Dec 2016",
      description: [
        "Troubleshot and supported desktops, laptops, printers, tablets, televisions, and cameras, resolving technical issues efficiently.",
        "Documented customer information and troubleshooting steps using SAP software, maintaining detailed records of support interactions.",
        "Recognized as Employee of the Month multiple times for highest ratings in action, ownership, customer satisfaction, and resolved tickets."
      ],
      image: HarteHanksImage,
      url: "https://www.hartehanks.com"
    }
  ];

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className={`scroll-animate ${isVisible ? 'visible' : ''}`} ref={ref}>
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