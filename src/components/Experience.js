// ExperienceTimeline.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experiences from './experiences';
import './Experience.css';

const Experience = () => {
  return (
    <VerticalTimeline>
    {experiences.map((experience, index) => (
      <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element--work"
        date={experience.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">{experience.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
        <p>
          {experience.description}
        </p>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
  
  );
};

export default Experience;
