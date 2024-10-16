import React from 'react';
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

const App: React.FC = () => {
  const routing = useRoutes(routes);

  return (
    <AppContainer>
      <Sidebar />
      <div style={{ flex: 1 }}>{routing}</div>
    </AppContainer>
  );
};

export default App;