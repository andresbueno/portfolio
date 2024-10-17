import React from 'react';
import styled from 'styled-components';
import { FaUser, FaBriefcase, FaCode, FaCogs, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${props => props.isOpen ? '250px' : '60px'};
  background-color: #2c2c2c;
  padding: 20px 0;
  height: 100vh;
  position: fixed;
  transition: width 0.3s ease-in-out;
  overflow-x: hidden;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${props => props.active ? '#3a3a3a' : 'transparent'};

  &:hover {
    background-color: #3a3a3a;
  }

  svg {
    margin-right: 10px;
    min-width: 20px;
  }
`;

const NavText = styled.span<{ isOpen: boolean }>`
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    background-color: #3a3a3a;
  }

  svg {
    transition: transform 0.3s ease-in-out;
  }
`;

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'About Me', icon: <FaUser /> },
    { path: '/experience', label: 'Experience', icon: <FaBriefcase /> },
    { path: '/projects', label: 'Projects', icon: <FaCode /> },
    { path: '/skills', label: 'Skills', icon: <FaCogs /> },
    { path: '/hobbies', label: 'Hobbies', icon: <FaHeart /> }
  ];

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </ToggleButton>
      {navItems.map((item) => (
        <StyledLink key={item.path} to={item.path}>
          <NavItem active={location.pathname === item.path}>
            {item.icon}
            <NavText isOpen={isOpen}>{item.label}</NavText>
          </NavItem>
        </StyledLink>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;