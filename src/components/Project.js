// src/components/Projects.js
import React from 'react';
import './Project.css';


const projects = [
  {
    title: 'VersaBot',
    description: 'To prevent confidential document theft, a device combines servo motor and RFID tech for safe handovers.',
    link: 'www.google.com',
  },
  {
    title: 'Sales Predictor',
    description: 'A sales model which predicts the sales forcast upon user or company data input.',
    link: 'https://github.com/ishikasingh21/Sales-predictor',
  },
  {
    title: 'Bank Transaction Analysis',
    description: 'A Python Model that used for manipulating and cleaning the data.',
    link: 'https://github.com/ishikasingh21/datacleaning-project-1',
  },
  {
    title: 'Plant Disease Detection',
    description: 'A machine learning model that classifies the potato leaf as healthy or affected by either late or early blight.',
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
