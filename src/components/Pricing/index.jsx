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
        { name: 'Pro', price: '$69' },
        { name: 'Custom', price: <PhoneIcon /> },
      ],
    },
    {
      category: 'Coaches',
      plans: [
        { name: 'Basic', price: '$0' },
        { name: 'Pro', price: '$20' },
      ],
    },
    {
      category: 'Players',
      plans: [
        { name: 'Basic', price: '$0' },
        { name: 'Pro', price: '$1' },
      ],
    },
  ];

  const getPlanContent = (category, planName) => {
    if (category === 'Clubs') {
      if (planName === 'Basic') {
        return (
          <List spacing={2} fontSize="sm">
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Basic club management features
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Limited player profiles
            </ListItem>
          </List>
        );
      } else if (planName === 'Pro') {
        return (
          <List spacing={2} fontSize="sm">
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Advanced club management features
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Unlimited player profiles
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Performance analytics
            </ListItem>
          </List>
        );
      } else if (planName === 'Custom') {
        return (
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
      }
    } else if (category === 'Coaches' || category === 'Players') {
      if (planName === 'Basic') {
        return (
          <List spacing={2} fontSize="sm">
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Simple Profile
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Limited access
            </ListItem>
          </List>
        );
      } else if (planName === 'Pro') {
        return (
          <List spacing={2} fontSize="sm">
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Advanced features
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Full access
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Verified Profile
            </ListItem>
          </List>
        );
      }
    }
    return null;
  };

  return (
    <Flex
      bgImg="url(/images/benefits-bg.svg)"
      minH="100vh"
      maxW="100vw"
      bgSize="cover"
      justifyContent="center"
      alignItems="center"
      px={4}
    >
      <Box
        w={{ base: "95vw", md: "80vw", lg: "60vw" }}
        mx="auto"
        bg="rgba(0, 0, 102, 0.7)"
        p={{ base: 6, md: 8, lg: 12 }}
        borderRadius="xl"
        boxShadow="2xl"
      >
        <Heading as="h2" size={{ base: "xl", md: "2xl" }} color="white" textAlign="center" mb={10} fontFamily="Montserrat, sans-serif">
          Pricing
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={{ base: "30px", md: "40px" }}>
          {pricingData.map(section => (
            <VStack key={section.category} w={{ base: "100%", md: "33.33%" }} spacing={6} bg="rgba(255, 255, 255, 0.1)" p={6} borderRadius="lg">
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="white">
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
                    <HStack width="100%" spacing={2} justifyContent="space-between">
                      <Button
                        variant="outline"
                        color="white"
                        flex="1"
                        _hover={{ bg: '#FF7434' }}
                        onMouseEnter={() =>
                          setHoveredItem(`${section.category}-${plan.name}`)
                        }
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {plan.name}
                      </Button>
                      <Text color="white" fontSize="lg" fontWeight="bold" minWidth="60px" textAlign="right">
                        {plan.price}
                      </Text>
                    </HStack>
                  </PopoverTrigger>
                  {plan.price && (
                    <PopoverContent bg="gray.800" borderColor="gray.600">
                      <PopoverBody color="white" textAlign="left">
                        {getPlanContent(section.category, plan.name)}
                      </PopoverBody>
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