import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript (ES6+)', 'React', 'Node.js', 'Express',
    'Firebase', 'HTML & CSS', 'Git & GitHub', 'Responsive Design'
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="numbered-heading">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;