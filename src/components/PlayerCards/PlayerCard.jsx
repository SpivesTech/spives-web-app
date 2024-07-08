import React from 'react';
import { Box, Image, Text, Flex, VStack, HStack, Badge } from '@chakra-ui/react';

const PlayerCard = ({ player }) => {
  if (!player) {
    return <Text>No player data available.</Text>;
  }

  const {
    name,
    age,
    image,
    position,
    height,
    weight,
    club,
    coach,
    foot,
    id,
    nickname,
  } = player;

  return (
    <Box 
      maxW="300px" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden"
      bg="white"
      boxShadow="md"
    >
      <Box position="relative" height="200px">
        <Image 
          src={image} 
          alt={name} 
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Box position="absolute" top="2" left="2">
          <Badge colorScheme="green">NG</Badge>
        </Box>
        <Box position="absolute" top="2" right="2">
          <Badge colorScheme="blue">LYC</Badge>
        </Box>
      </Box>

      <Box p="4">
        <VStack align="stretch" spacing={1}>
          <Text fontWeight="bold" fontSize="md">{name}</Text>
          <Text fontSize="sm" color="gray.500">{nickname}</Text>
          <HStack justifyContent="space-between">
            <Text fontSize="sm">{position}</Text>
            <Text fontSize="sm">{age} years</Text>
          </HStack>
          <Text fontSize="sm">{foot} Footer</Text>
          <HStack spacing={2}>
            {['RM', 'RW', 'CM'].map((pos, index) => (
              <Badge key={index} colorScheme="blue" variant="solid">
                {pos}
              </Badge>
            ))}
          </HStack>
          <Flex justify="space-between" align="center" mt={2}>
            <Text fontWeight="bold" fontSize="xl">10</Text>
            <Box 
              width="80px" 
              height="60px" 
              bg="green.100" 
              borderRadius="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box 
                width="10px" 
                height="10px" 
                bg="blue.500" 
                borderRadius="full"
                position="relative"
                left="-20px"
              />
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default PlayerCard;