import React from 'react';
import styled from 'styled-components';

const HobbiesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .hobby {
    margin-bottom: 15px;
  }
`;

const Hobbies: React.FC = () => {
  return (
    <HobbiesContainer>
      <h1>Hobbies</h1>
      <div className="hobby">
        <h2>Programming and developing personal projects</h2>
        <p>I frequently develop personal projects to explore new technologies and improve my skills. It's a way for me to stay innovative and bring fresh ideas into my professional work.</p>
      </div>
      <div className="hobby">
        <h2>Reading</h2>
        <p>I regularly read books on technology and personal development. This keeps me up to date with industry trends and helps me explore new ideas.</p>
      </div>
      <div className="hobby">
        <h2>Learning and practice new languaje</h2>
        <p>I'm passionate about learning new languages, as it not only broadens my communication skills but also sharpens my cognitive abilities. It helps me adapt to new challenges and work effectively in multicultural teams</p>
      </div>
    </HobbiesContainer>
  );
};

export default Hobbies;