// src/components/CoachProfileSection.jsx
import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Container,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const CoachProfileSection = () => {
  return (
    <Box bg="#03033E" py={8}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between">
          <Box flex={1} mr={{ base: 0, lg: 10 }} maxW={{ lg: "60%" }}>
            <Heading as="h2" size="2xl" mb={6} color="white" textAlign="left">
              <Text as="span">coach</Text>
              <Text as="span" color="#FF9434"> profile</Text>
            </Heading>
            <Box position="relative" pb="50px">
              <Text fontSize="lg" color="white" mb={6} textAlign="left">
                We designed Spives to support coaches in their mission to develop
                top-tier talent. Coaches can track player profiles, simplify planning
                with an integrated calendar, and access detailed match analysis.
                They can centralize messaging, discover new talent with player
                profile cards, and use various drills and tactical guides. Spives also
                enables easy sharing of tactics and plans, and provides data-driven
                insights to enhance team performance. With Spives, coaches can
                focus on leading their teams to success.
              </Text>
              <Button
                as={RouterLink}
                to="/signup"
                size="md"
                bg="#FF9434"
                color="white"
                _hover={{ bg: '#FFB434' }}
                position="absolute"
                bottom="0"
                left="0"
              >
                Create Account
              </Button>
            </Box>
          </Box>
          <Box flex={1} mt={{ base: 10, lg: 0 }} maxW={{ lg: "30%" }}>
            <Image 
              src="/images/SpivesCoach.png" 
              alt="Coach Profile"
              maxW="100%"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CoachProfileSection;