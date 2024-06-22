import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  HStack,
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
      <Box position="relative" zIndex={2}>
        <Image src="/images/hero-title.svg" />
        <Text
          color="white"
          textAlign="start"
          ms="58px"
          fontSize="30px"
          fontWeight="semibold"
          my={4}
        >
          Streamline Your Football Club <br /> Management with{' '}
          <Text as="span" color="#FF9434">
            Spives
          </Text>
        </Text>
        <Flex>
          <Button textAlign="start" as={RouterLink} ms="58px">
            Get Started
          </Button>
        </Flex>
      </Box>
      <Box mx="auto" zIndex={2} alignSelf="flex-end">
        <Image src="/images/hero-stats.svg" mx="auto" />
        <Image src="images/SpivesBall.png" width={500} />
      </Box>
    </Flex>
  );
};

export default HeroSection;
