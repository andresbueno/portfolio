import React from 'react';
import styled from 'styled-components';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Hobbies from './sections/Hobbies';

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

interface ContentProps {
  activeSection: string;
}

const Content: React.FC<ContentProps> = ({ activeSection }) => {
  return (
    <ContentContainer>
      {activeSection === 'about' && <AboutMe />}
      {activeSection === 'experience' && <Experience />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'hobbies' && <Hobbies />}
    </ContentContainer>
  );
};

export default Content;