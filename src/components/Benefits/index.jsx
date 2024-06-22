import { Box, Container, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

const benefits = [
  { title: "training schedule", image: "/images/training image.png" },
  { title: "player management", image: "/images/spivesboy.png" },
  { title: "tactics & formations", image: "/images/small pitch.png" },
  { title: "in-app messaging", image: "/images/training image.png" },
  { title: "schedule management", image: "/images/small pitch.png" },
  { title: "tactics & formations", image: "/images/small pitch.png" }
];

const Benefits = () => {
  return (
    <Box py={{ base: 12, lg: 24 }} px={{ base: 4, md: 8 }}>
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} mb={12}>
          <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} color="blue.700">
            benefits using spives..
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
            Spives is a comprehensive football club management platform that helps you streamline
            your operations and achieve success. With features like player management, schedule
            management, and performance analytics, Spives provides all the tools you need to run
            your club efficiently. Take your club to the next level with Spives today.
          </Text>
        </Grid>
        <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }} gap={6}>
          {benefits.map((benefit, index) => (
            <GridItem key={index}>
              <Box position="relative" borderRadius="md" overflow="hidden">
                <Image src={benefit.image} alt={benefit.title} objectFit="cover" />
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  bg="rgba(0, 0, 0, 0.5)"
                  color="white"
                  p={4}
                >
                  <Text fontWeight="bold" fontSize="lg">{benefit.title}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
