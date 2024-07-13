import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { 
  Box, 
  Grid, 
  Flex, 
  Select, 
  Input, 
  Button, 
  Container,
  VStack,
  HStack,
  Text
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import playerData from '../components/PlayerCards/data';
import { NewPlayerCard } from '../components/NewPlayerCard';

const TalentsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(playerData);
  }, []);

  if (!data) {
    return <Box>Loading...</Box>;
  }

  return (
    <>
      <Helmet>
        <title>Talents | Spives</title>
      </Helmet>
      <Navbar />
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Flex justifyContent="space-between" alignItems="center">
            <HStack spacing={4}>
              <Select placeholder="Power Foot">
                <option value="left">Left</option>
                <option value="right">Right</option>
              </Select>
              <Select placeholder="Age">{/* Add age options */}</Select>
              <Select placeholder="Position">
                {/* Add position options */}
              </Select>
              <Input placeholder="Search" />
            </HStack>
            <Button colorScheme="blue">Update</Button>
          </Flex>

          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            }}
            gap={6}
          >
            {data.map((player, index) => (
              <NewPlayerCard key={index} player={player} />
            ))}
          </Grid>

          <Flex justifyContent="center" mt={8}>
            <Button mr={2}>Back</Button>
            <Button>Next</Button>
          </Flex>
        </VStack>
      </Container>
      <Box as="footer" bg="gray.100" py={4} mt={8}>
        <Container maxW="container.xl">
          <VStack spacing={4} align="stretch">
            <Text fontWeight="bold">Stay Informed. Join Now.</Text>
            <Text>
              Sign up for our newsletter to receive the latest updates.
            </Text>
            <Flex>
              <Input placeholder="Your Email Address" mr={2} />
              <Button colorScheme="blue">Subscribe</Button>
            </Flex>
            <Text fontSize="sm" color="gray.500">
              © 2024 Spives. All rights reserved.
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default TalentsPage;