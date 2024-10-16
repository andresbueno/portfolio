import { RouteObject } from 'react-router-dom';
import AboutMe from './components/sections/AboutMe';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Hobbies from './components/sections/Hobbies';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <AboutMe />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/hobbies',
    element: <Hobbies />,
  },
  {
    path: '*',
    element: <AboutMe />,
  },
];

export default routes;