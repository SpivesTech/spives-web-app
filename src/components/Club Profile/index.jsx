import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Container,
} from '@chakra-ui/react';

const ClubProfileSection = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between">
        <Box flex={1} mb={{ base: 10, lg: 0 }}>
          <Image 
            src="/images/spives-dashboard.png" 
            alt="Spives Dashboard"
            maxW="100%"
            borderRadius="xl"
            boxShadow="2xl"
          />
        </Box>
        <Box flex={1} ml={{ base: 0, lg: 10 }}>
          <Heading as="h2" size="2xl" mb={6}>
            <Text as="span" color="navy">club</Text>
            <Text as="span" color="orange.400"> management</Text>
          </Heading>
          <Text fontSize="lg" mb={6}>
            Spives is a comprehensive football club management platform
            that helps you streamline your operations and achieve success.
            With features like player management, schedule management,
            and performance analytics, Spives provides all the tools you
            need to run your club efficiently. Take your club to the next
            level with Spives today.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default ClubProfileSection;