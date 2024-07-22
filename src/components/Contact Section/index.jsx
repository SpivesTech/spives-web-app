import { Box, Container, Grid, GridItem, Heading, Text, Input, Textarea, Button, Icon } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, AtSignIcon } from '@chakra-ui/icons';

const Contact = () => {
  return (
    <Box py={{ base: 12, lg: 24 }} px={{ base: 4, md: 8 }}>
      <Container maxW="container.xl">
        <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} color="blue.700" mb={12}>
          contact us
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8} mb={12}>
          <GridItem textAlign="center">
            <Icon as={EmailIcon} w={8} h={8} color="orange.400" />
            <Text fontSize="lg" fontWeight="bold" color="blue.700" mt={4}>Email</Text>
            <Text fontSize="md" color="gray.600">support@gospives.com</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Icon as={PhoneIcon} w={8} h={8} color="orange.400" />
            <Text fontSize="lg" fontWeight="bold" color="blue.700" mt={4}>Phone</Text>
            <Text fontSize="md" color="gray.600">+233567133358</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Icon as={AtSignIcon} w={8} h={8} color="orange.400" />
            <Text fontSize="lg" fontWeight="bold" color="blue.700" mt={4}>Office</Text>
            <Text fontSize="md" color="gray.600">everywhere a football is being kicked around</Text>
          </GridItem>
        </Grid>
        <Box as="form" maxW="container.md" mx="auto">
          <Input placeholder="Name" mb={4} />
          <Input placeholder="Email" mb={4} />
          <Textarea placeholder="Message" mb={4} />
          <Button colorScheme="blue" type="submit">Submit</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
