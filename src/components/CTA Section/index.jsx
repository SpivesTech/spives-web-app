import React from 'react';
import { Box, Container, Heading, Text, Button, Image, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const CTASection = () => {
  return (
    <Box bg="gray.100" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="center" mb={16}>
          <Heading as="h2" size="2xl" textAlign="center">
Join the blue team          </Heading>
          <Text fontSize="xl" textAlign="center" maxW="2xl">
          We call our beta testers the “blue team”. And because we are a community driven product, your feedback and contribution will definitely go a long way in refining this amazing product for you!          </Text>
          <Button
            as={RouterLink}
            to="/signup"
            size="lg"
            colorScheme="orange"
            fontWeight="bold"
          >
            Join Blue Team
          </Button>
        </VStack>
        <Box position="relative" width="100%" paddingBottom="40%">
          <Image
            src="/images/TeamImage.png"
            alt="Football Management Dashboard"
            position="absolute"
            top={0}
            left="5%"
            right="5%"
            bottom={0}
            width="90%"
            height="100%"
            objectFit="cover"
            borderRadius="xl"
            boxShadow="2xl"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;