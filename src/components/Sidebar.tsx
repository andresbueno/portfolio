import styled from 'styled-components';
import { FaUser, FaBriefcase, FaCode, FaCogs, FaHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


const SidebarContainer = styled.div`
  width: 250px;
  background-color: #2c2c2c;
  padding: 20px;
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
  background-color: ${(props) => (props.active ? '#3a3a3a' : 'transparent')};

  &:hover {
    background-color: #3a3a3a;
  }

  svg {
    margin-right: 10px;
  }
`;

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'About Me', icon: <FaUser /> },
    { path: '/experience', label: 'Experience', icon: <FaBriefcase /> },
    { path: '/projects', label: 'Projects', icon: <FaCode /> },
    { path: '/skills', label: 'Skills', icon: <FaCogs /> },
    { path: '/hobbies', label: 'Hobbies', icon: <FaHeart /> } // Nuevo ítem "Hobbies"
  ];

  return (
    <SidebarContainer>
      {navItems.map((item) => (
        <StyledLink key={item.path} to={item.path}>
          <NavItem active={location.pathname === item.path}>
            {item.icon}
            {item.label}
          </NavItem>
        </StyledLink>
      ))}
    </SidebarContainer>
  );
};
export default Sidebar;