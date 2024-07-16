import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectRoutes from './Routes';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
import './App.css'

import "@fontsource/montserrat"; // Defaults to weight 400

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          <ProjectRoutes />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;