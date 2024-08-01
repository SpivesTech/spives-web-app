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

const ClubProfileSection = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between">
        <Box flex={1} mb={{ base: 10, lg: 0 }} maxW={{ lg: "30%" }}>
          <Image 
            src="/images/spiveshomesmall.png" 
            alt="Spives Dashboard"
            maxW="100%"
            borderRadius="xl"
            boxShadow="2xl"
          />
        </Box>
        <Box flex={1} ml={{ base: 0, lg: 10 }} px="58px">
          <Box textAlign="end">
            <Heading as="h2" size="xl" mb={4} fontFamily="Adumu, Arial, sans-serif">
              <Text as="span" color="navy">club</Text>
              <Text as="span" color="orange.400"> management</Text>
            </Heading>
            <Text fontSize="lg" mb={6} fontFamily="Montserrat, sans-serif" textAlign="end">
              Spives is a comprehensive football club management platform
              that helps you streamline your operations and achieve success.
              With features like player management, schedule management,
              and performance analytics, Spives provides all the tools you
              need to run your club efficiently. Take your club to the next
              level with Spives today.
            </Text>
            <Button
              as="a"
              href="https://www.figma.com/proto/QeWzqrSCnZX0UwsWkTSIFC/spives-web-app.?node-id=2100-2509&t=wg4AhLKiJgPetC7b-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2100%3A2509"
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              bg="#000066"
              color="white"
              _hover={{ bg: '#000088' }}
              mt={4}
              float="right"
            >
              Try Demo
            </Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default ClubProfileSection;