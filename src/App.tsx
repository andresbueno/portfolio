import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 2rem;
  margin-left: ${props => props.sidebarOpen ? '250px' : '60px'};
  transition: margin-left 0.3s ease-in-out;
`;

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const routing = useRoutes(routes);

  return (
    <AppContainer>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <ContentContainer sidebarOpen={sidebarOpen}>{routing}</ContentContainer>
    </AppContainer>
  );
};

export default App;