// src/components/Projects.js
import React from 'react';
import './Project.css';


const projects = [
  {
    title: 'Go Food Go',
    description: 'It is a food delivery app named "Go Food Go". I am currently immersed in building this end to endproject based on MERN Stack Development.',
    link: 'https://github.com/ishikasingh21/mernapp',
  },
  {
    title: 'VersaBot',
    description: '',
    link: 'www.google.com',
  },
  {
    title: 'Sales Predictor',
    description: 'blah blah blah',
    link: 'https://github.com/ishikasingh21/Sales-predictor',
  },
  {
    title: 'Responsive Clone Website',
    description: 'blah blah blah',
    link: 'action needed',
  },
  {
    title: 'Currency Convertor',
    description: 'blah blah blah',
    link: 'https://github.com/ishikasingh21/Currency-Converter',
  },
  {
    title: 'Bank Transaction Analysis',
    description: 'blah blah blah',
    link: 'https://github.com/ishikasingh21/datacleaning-project-1',
  },
  {
    title: 'Plant Disease Detection',
    description: 'blah blah blah',
    link: 'https://github.com/ishikasingh21/Plant-Disease-detection',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} 
            target="_blank" 
            rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
