import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .skill-category {
    margin-bottom: 20px;
  }
`;

// Programming Languages: Kotlin (Intermediate), JavaScript (Intermediate), PHP (Intermediate), SQL
// (Intermediate), HTML (Intermediate), CSS (Intermediate), Python (Beginner).
// - Frameworks and Tools: Jetpack, Jetpack Compose, Material Design, GraphQL, React.js, GitHub.
// - Languages: English (Intermediate), Spanish (Native).

const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <h1>Skills</h1>
      <div className="skill-category">
        <h2>Programming Languages</h2>
        <ul>
          <li>Kotlin (Intermediate)</li>
          <li>JavaScript (Intermediate)</li>
          <li>TypeScript (Intermediate)</li>
          <li>PHP (Intermediate)</li>
          <li>SQL (Intermediate)</li>
          <li>HTML/CSS (Intermediate)</li>
          <li>Python (Beginner)</li>
        </ul>
      </div>
      <div className="skill-category">
        <h2>Frameworks and Tools</h2>
        <ul>
          <li>Jetpack</li>
          <li>Jetpack Compose</li>
          <li>Material Design</li>
          <li>GraphQl</li>
          <li>React.js</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div className="skill-category">
        <h2>Languages</h2>
        <ul>
          <li>English (Intermediate)</li>
          <li>Spanish (Native)</li>
        </ul>
      </div>
    </SkillsContainer>
  );
};

export default Skills;