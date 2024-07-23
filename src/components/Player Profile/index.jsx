import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Container,
} from '@chakra-ui/react';

const PlayerProfileCardSection = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between">
        <Box flex={1} mb={{ base: 10, lg: 0 }}>
          <Image 
            src="/images/player-profile-card.png" 
            alt="Player Profile Card"
            maxW="100%"
          />
        </Box>
        <Box flex={1} ml={{ base: 0, lg: 10 }}>
          <Heading as="h2" size="2xl" mb={6}>
            <Text as="span" color="navy">player profile</Text>
            <Text as="span" color="orange.400"> cards</Text>
          </Heading>
          <Text fontSize="lg" mb={6}>
            We designed the player profile cards because every young talent
            deserves to be seen. In many African countries, limited resources and
            lack of exposure hinder young athletes' dreams. Our profile cards
            provide a platform for showcasing their skills, connecting them with
            coaches, scouts, and clubs worldwide. At Spives, we believe every child's
            dream of becoming a football star should be within reach.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default PlayerProfileCardSection;