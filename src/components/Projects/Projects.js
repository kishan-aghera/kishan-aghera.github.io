import React from 'react';

import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import ProjectCard from './ProjectCard';

import { projectsData } from './../../assets/projectsData';

const Projects = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Projects"
        details="Here are some of my projects that I have worked on. Do check them out."
      />

      <div className='project-cards-container'>
        {projectsData.map(
          ({
            projectName,
            projectDescription,
            imageUrl,
            videoUrl,
            projectUrl,
          }) => {
            return (
              <ProjectCard
                projectName={projectName}
                projectDescription={projectDescription}
                projectUrl={projectUrl}
                imageUrl={imageUrl}
                videoUrl={videoUrl}
              />
            );
          }
        )}
      </div>

      <FooterLink
        phrase="Check out "
        link=" my skills!"
        toAddress="/skills"
      />
    </div>
  )
}

export default Projects;
