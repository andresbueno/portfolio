import styled from 'styled-components';
import { FaUser, FaBriefcase, FaCode, FaCogs, FaHeart } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #2c2c2c;
  padding: 20px;
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
  }
`;

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <SidebarContainer>
      <NavItem active={activeSection === 'about'} onClick={() => setActiveSection('about')}>
        <FaUser />
        About Me
      </NavItem>
      <NavItem active={activeSection === 'experience'} onClick={() => setActiveSection('experience')}>
        <FaBriefcase />
        Experience
      </NavItem>
      <NavItem active={activeSection === 'projects'} onClick={() => setActiveSection('projects')}>
        <FaCode />
        Projects
      </NavItem>
      <NavItem active={activeSection === 'skills'} onClick={() => setActiveSection('skills')}>
        <FaCogs />
        Skills
      </NavItem>
      <NavItem active={activeSection === 'hobbies'} onClick={() => setActiveSection('hobbies')}>
        <FaHeart />
        Hobbies
      </NavItem>
    </SidebarContainer>
  );
};

export default Sidebar;