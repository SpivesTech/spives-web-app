import Helmet from 'react-helmet';
import Header from '../components/Header';
import { Text, Flex, Box, Image, Button, Heading, Container, Textarea, AbsoluteCenter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';


const LandingPage = () => {
    return (
      <>
        <Helmet>
          <title>Spives - Home</title>
          <meta name="description" content="Spives - Home" />
        </Helmet>        <Header />
        
      </>
    );
  }
  
  export default LandingPage;