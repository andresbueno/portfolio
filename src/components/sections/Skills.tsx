import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .skill-category {
    margin-bottom: 20px;
  }
`;

const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <h1>Skills</h1>
      <div className="skill-category">
        <h2>Frontend</h2>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
      <div className="skill-category">
        <h2>Backend</h2>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </SkillsContainer>
  );
};

export default Skills;