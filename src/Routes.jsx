import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Register';
import Dashboard from './pages/dashboard';
import PrivateRoute from './components/PrivateRoute';
import TalentsPage from './pages/Talents';
import PositionSelect from './pages/auth/postionSelect';
import Onboarding from './pages/auth/Onboarding';
import OnboardingDoc from './pages/auth/OnboardingDoc';

function ProjectRoutes() {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/landing', element: <LandingPage /> },
    { path: '/talents', element: <TalentsPage /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/positionSelect', element: <PositionSelect /> },
    { path: '/onboarding', element: <Onboarding /> },
    { path: '/onboardingDoc', element: <OnboardingDoc /> },
    {
      path: '/dashboard/*',
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
    { path: '*', element: <NotFound /> },
  ]);

  return element;
}

export default ProjectRoutes;