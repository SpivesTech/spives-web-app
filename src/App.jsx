import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectRoutes from './Routes';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          <Home />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;