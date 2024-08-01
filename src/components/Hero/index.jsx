import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Flex
      minHeight="95vh"
      bgImg="url(/images/hero-bg.png)"
      alignItems="center"
      position="relative"
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#03033E',
        opacity: 0.8,
        zIndex: 1,
      }}
    >
      <Box position="relative" zIndex={2} ms="58px" >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Image src="/images/hero-title.svg" width={380} />
          <Text
            color="white"
            fontSize="30px"
            fontWeight="semibold"
            textAlign="start"
            width="36vw"
          >
            put your profile one step ahead. 
            create a <Text as="span" color="#FF9434">player card</Text> now 
            
          </Text>
          <Button as={RouterLink} mt={4} size="md" colorScheme="blue">
            Get Started
          </Button>
        </div>
      </Box>
      <Box ms="auto" zIndex={2} textAlign="end" alignSelf="flex-end" pe="58px" position="relative" width="40vw">
        <Image src="images\SpivesPlayerCardHome.png" mb="50px" ms="auto" width="full"/>
      </Box>
    </Flex>
  );
};

export default HeroSection;