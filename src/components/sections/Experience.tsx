import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .experience-item {
    margin-bottom: 20px;
  }
`;

const Experience: React.FC = () => {
  return (
    <ExperienceContainer>
      <h1>Experience</h1>
      <div className="experience-item">
        <h2>Senior Web Developer - Tech Co.</h2>
        <p>Developed and maintained large-scale React applications, implemented CI/CD pipelines, and mentored junior developers.</p>
      </div>
      <div className="experience-item">
        <h2>Android Developer - Mobile Apps Inc.</h2>
        <p>Created Android applications using Kotlin and Jetpack Compose, focusing on material design and user experience.</p>
      </div>
      <div className="experience-item">
        <h2>Freelance Developer</h2>
        <p>Worked on various projects in healthcare, pet industry, and restaurants, utilizing a wide range of technologies.</p>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;