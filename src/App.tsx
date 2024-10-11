import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
`;

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <AppContainer>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Content activeSection={activeSection} />
    </AppContainer>
  );
};

export default App;