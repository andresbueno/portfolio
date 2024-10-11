import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
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
      <pre><code>{`
// Example TypeScript code
interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

const skills: Skill[] = [
  { name: 'React', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
];
      `}</code></pre>
    </SkillsContainer>
  );
};

export default Skills;