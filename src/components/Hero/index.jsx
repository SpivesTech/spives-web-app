import React from 'react';
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Box
      backgroundImage="url('/images/HeroBG image.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="calc(100vh - 80px)" // Adjust based on your navbar height
      position="relative"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 102, 0.2)" // Adjust the last value (0.7) for transparency
        zIndex="1"
      />
      
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        h="100%"
        p={8}
        position="relative"
        zIndex="2"
      >
        <VStack align="flex-start" spacing={6} maxW="600px">
          <Heading
            as="h1"
            size="4xl"
            color="white"
            fontWeight="bold"
            lineHeight="1"
          >
            get <br />
            <Text as="span" color="orange.400">
              ahead
            </Text>
          </Heading>
          <Text fontSize="xl" color="white">
            Streamline Your Football Club Management with Spives
          </Text>
          <Button
            as={RouterLink}
            to="/signup"
            size="lg"
            colorScheme="orange"
            fontWeight="bold"
          >
            Get Started
          </Button>
        </VStack>

        <VStack align="flex-end" spacing={4}>
          <Box
            bg="white"
            borderRadius="md"
            p={4}
            boxShadow="lg"
          >
            <VStack spacing={2} align="center">
              <HStack>
                <Image src="/path-to-club-icon.png" boxSize="24px" />
                <Text fontWeight="bold" fontSize="3xl">89</Text>
              </HStack>
              <Text fontSize="sm">MATCHES PLAYED</Text>
              <HStack spacing={4}>
                <VStack>
                  <Image src="/path-to-ball-icon.png" boxSize="16px" />
                  <Text fontSize="sm">20</Text>
                </VStack>
                <VStack>
                  <Image src="/path-to-jersey-icon.png" boxSize="16px" />
                  <Text fontSize="sm">11</Text>
                </VStack>
                <VStack>
                  <Image src="/path-to-whistle-icon.png" boxSize="16px" />
                  <Text fontSize="sm">3</Text>
                </VStack>
                <VStack>
                  <Image src="/path-to-stopwatch-icon.png" boxSize="16px" />
                  <Text fontSize="sm">40</Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
          <Image src="/images/SpivesBall.png" boxSize="250px" />
        </VStack>
      </Flex>
    </Box>
  );
};

export default HeroSection;