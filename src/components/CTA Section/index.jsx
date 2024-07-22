import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const CTASection = () => {
  return (
    <Box bg="white" py={8} px="58px">
      <Box>
        <Flex align="start" justify="space-between">
          <Box maxW="50%" position="relative" zIndex={2}>
            <Image src="/spives-cta-title.png" />
            <Text fontSize="md" mb={6} my={4} textAlign="start">
              We call our beta testers the "blue team". And because we are a
              community driven product, your feedback and contribution will
              definitely go a long way in refining this amazing product for you!
            </Text>
            <Box textAlign="start">
              <Button
                as={RouterLink}
                to="/signup"
                size="md"
                bg="#000066"
                color="white"
                fontWeight="bold"
                textAlign="start"
              
                me="auto"
              >
                Join Blue Team
              </Button>
            </Box>
          </Box>
            <Image
              src="/images/spives-jersey-boots.svg"
              alt="Blue T-shirt"
              width="37.2vw"
              mr={4}
            />
          </Flex>
      </Box>
    </Box>
  );
};

export default CTASection;
