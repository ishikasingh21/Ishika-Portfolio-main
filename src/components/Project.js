// src/components/Projects.js
import React from 'react';
import './Project.css';


const projects = [
  {
    title: 'VersaBot',
    description: 'blah blah blah',
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
