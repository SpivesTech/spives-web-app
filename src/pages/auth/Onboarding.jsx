import React, { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Input,
  Progress,
  Flex,
  Image,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';

const Onboarding = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploading(true);
    // Simulate upload progress
    setTimeout(() => setUploading(false), 3000);
  };

  const bgColor = useColorModeValue('white', 'gray.700');
  const uploadBgColor = useColorModeValue('gray.100', 'gray.600');

  return (
    <Box
      minHeight="100vh"
      bgImage="url('/images/football-field.jpg')"
      bgSize="cover"
      bgPosition="center"
    >
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="center">
          <Heading color="orange.400" fontSize="4xl">Upload photo</Heading>
          <Text color="white">Select a photo you want to use as your profile photo</Text>
          
          <Box
            bg={bgColor}
            p={10}
            borderRadius="xl"
            boxShadow="xl"
            width="full"
            maxW="md"
          >
            <VStack spacing={4}>
              <Icon as={AttachmentIcon} boxSize={10} color="gray.400" />
              <Text>Choose a file or drag & drop it here</Text>
              <Text fontSize="sm" color="gray.500">JPEG, PNG up to 105kb</Text>
              <Button onClick={() => document.getElementById('fileInput').click()}>
                Browse File
              </Button>
              <Input
                id="fileInput"
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </VStack>
          </Box>
          
          {file && (
            <Box
              bg={uploadBgColor}
              p={4}
              borderRadius="md"
              width="full"
              maxW="md"
            >
              <Flex align="center">
                <Image src="/images/pdf-icon.png" boxSize="40px" mr={4} />
                <VStack align="start" flex={1}>
                  <Text fontWeight="bold">{file.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {file.size} KB of {file.size} KB
                  </Text>
                </VStack>
                <Text color="blue.500">{uploading ? 'Uploading...' : 'Uploaded'}</Text>
              </Flex>
              {uploading && <Progress size="xs" isIndeterminate colorScheme="blue" mt={2} />}
            </Box>
          )}
          
          <Button colorScheme="blue" size="lg">
            Complete Profile
          </Button>
          <Text color="white" fontSize="sm">Now you can view your dashboard!</Text>
        </VStack>
      </Container>
      
      <Box position="fixed" bottom={0} left={0} right={0} bg="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text fontSize="sm">
              Stay Informed. Join Now.<br />
              Sign up for our newsletter to receive the latest updates.
            </Text>
            <Flex>
              <Input placeholder="Your Email Address" mr={2} />
              <Button>Subscribe</Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Onboarding;