import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: #2c2c2c;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  margin: 0;
  color: #ccc;
`;

const projects = [
  {
    title: "E-commerce Platform",
    image: "https://via.placeholder.com/300x200?text=E-commerce",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
  },
  {
    title: "Task Management App",
    image: "https://via.placeholder.com/300x200?text=Task+Management",
    description: "An Android app for task management using Kotlin, Jetpack Compose, and Material Design 3.",
  },
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/300x200?text=Portfolio",
    description: "A responsive portfolio website built with React and styled-components.",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </div>
  );
};

export default Projects;