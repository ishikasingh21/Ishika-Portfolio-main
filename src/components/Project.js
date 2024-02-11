// src/components/Projects.js
import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    link: 'https://github.com/your-username/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    link: 'https://github.com/your-username/project2',
  },
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    link: 'https://github.com/your-username/project1',
  },
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    link: 'https://github.com/your-username/project1',
  },
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    link: 'https://github.com/your-username/project1',
  },
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    link: 'https://github.com/your-username/project1',
  },
  // Add more projects as needed
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
