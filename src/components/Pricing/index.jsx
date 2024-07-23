import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Heading,
  List,
  ListItem,
  ListIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react';
import { PhoneIcon, CheckIcon } from '@chakra-ui/icons';

const PricingSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const pricingData = [
    {
      category: 'Clubs',
      plans: [
        { name: 'Basic', price: '$0' },
        { name: 'Pro', price: '$30' },
        { name: 'Custom', price: <PhoneIcon /> },
      ],
    },
    {
      category: 'Coaches',
      plans: [
        { name: 'Basic', price: '$0' },
        { name: 'Pro', price: '$30' },
      ],
    },
    {
      category: 'Players',
      plans: [
        { name: 'Basic', price: '$0' },
        { name: 'Pro', price: '$30' },
      ],
    },
  ];

  const customContent = (
    <List spacing={2} fontSize="sm">
      <ListItem>
        <ListIcon as={CheckIcon} color="green.500" />
        Everything in PRO +
      </ListItem>
      <ListItem>
        <ListIcon as={CheckIcon} color="green.500" />
        Wearables for Player Data Collection
      </ListItem>
      <ListItem>
        <ListIcon as={CheckIcon} color="green.500" />
        Comprehensive Performance Analytics
      </ListItem>
      <ListItem>
        <ListIcon as={CheckIcon} color="green.500" />
        Priority Support
      </ListItem>
    </List>
  );

  return (
    <Flex
      bgImg="url(/images/benefits-bg.svg)"
      minH="100vh"
      maxW="100vw"
      bgSize="cover"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="40vw"
        mx="auto"
        bg="rgba(0,0,0,0.7)"
        p={10}
        borderRadius="xl"
      >
        <Heading as="h2" size="2xl" color="white" textAlign="center" mb={10}>
          Pricing
        </Heading>
        <Flex gap="30px">
          {pricingData.map(section => (
            <VStack key={section.category} w="33.33%" spacing={4}>
              <Text fontSize="xl" fontWeight="bold" color="white">
                {section.category}
              </Text>
              {section.plans.map(plan => (
                <Popover
                  key={plan.name}
                  trigger="hover"
                  isOpen={hoveredItem === `${section.category}-${plan.name}`}
                  onOpen={() =>
                    setHoveredItem(`${section.category}-${plan.name}`)
                  }
                  onClose={() => setHoveredItem(null)}
                >
                  <PopoverTrigger>
                    <HStack width="100%">
                      <Button
                        variant="outline"
                        color="white"
                        w="70%"
                        _hover={{ bg: 'blue.700' }}
                        onMouseEnter={() =>
                          setHoveredItem(`${section.category}-${plan.name}`)
                        }
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {plan.name}
                      </Button>
                      <Button
                        w="30%"
                        variant="outline"
                        color="white"
                        _hover={{ bg: 'transparent' }}
                      >
                        {plan.price}
                      </Button>
                    </HStack>
                  </PopoverTrigger>
                  {plan.price && (
                    <PopoverContent bg="gray.700" borderColor="gray.600">
                      <PopoverBody color="white">{customContent}</PopoverBody>
                    </PopoverContent>
                  )}
                </Popover>
              ))}
            </VStack>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default PricingSection;
