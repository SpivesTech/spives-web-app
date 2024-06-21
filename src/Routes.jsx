import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';

function ProjectRoutes ()  {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '*', element: <NotFound /> },
    { path: '/landingPage', element: <LandingPage /> },
  ]);

  return element;
}

export default ProjectRoutes;