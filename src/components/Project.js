// src/components/Projects.js
import React from 'react';
import './Project.css';
import Particle from "./Particle";

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
    title: 'Plant Disease Detection',
    description: 'In my Machine Learning project, I focused on image processing and CNNs. I used CNNs to analyze images, enhancing my skills in preprocessing, optimization, and evaluation.',
    link: 'https://github.com/ishikasingh21/Plant-Disease-detection',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <Particle />
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
