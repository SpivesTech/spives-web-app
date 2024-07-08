import Helmet from 'react-helmet';
import Header from '../components/Header';
import { Text, Flex, Box, Image, Button, Heading, Container, Textarea, AbsoluteCenter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';


const LandingPage = () => {
    return (
      <>
        <Helmet>
          <title>Spives - Home</title>
          <meta name="description" content="Spives - Home" />
        </Helmet>        <Navbar/>
        
      </>
    );
  }
  
  export default LandingPage;