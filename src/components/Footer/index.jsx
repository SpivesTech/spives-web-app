import { Box, Container, Grid, GridItem, Heading, Text, Input, Button, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box py={{ base: 12, lg: 24 }} px={{ base: 4, md: 8 }} bg="gray.100">
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={8} mb={12}>
          <GridItem>
            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="black" mb={2}>
              Stay Informed. Join Now.
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="black">
              Sign up for our newsletter to receive the latest updates.
            </Text>
          </GridItem>
          <GridItem display="flex" alignItems="center">
            <Input placeholder="Your Email Address" mr={2} />
            <Button colorScheme="blue">Subscribe</Button>
          </GridItem>
        </Grid>
        <Text fontSize="xs" color="gray.600">
          By subscribing, you agree to our <Link color="blue.500" href="#">Privacy Policy</Link>.
        </Text>
        <Box mt={12} borderTop="1px" borderColor="gray.300" pt={4}>
          <Text fontSize="xs" color="gray.600" textAlign="center">
            © 2024 Spives. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
