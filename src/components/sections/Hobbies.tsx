import React from 'react';
import styled from 'styled-components';

const HobbiesContainer = styled.div`
  .hobby {
    margin-bottom: 15px;
  }
`;

const Hobbies: React.FC = () => {
  return (
    <HobbiesContainer>
      <h1>Hobbies</h1>
      <div className="hobby">
        <h2>Photography</h2>
        <p>I love capturing moments and exploring new perspectives through my camera lens.</p>
      </div>
      <div className="hobby">
        <h2>Coding Side Projects</h2>
        <p>In my free time, I enjoy working on personal coding projects to learn new technologies.</p>
      </div>
      <pre>
        {/* <code>{`

      `}</code> */}
      </pre>
    </HobbiesContainer>
  );
};

export default Hobbies;