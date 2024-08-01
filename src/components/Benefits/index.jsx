import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

const Benefits = () => {
  return (
    <>
      <Flex
        bgImg="url(/images/benefits-bg.svg)"
        minH="100vh"
        maxW="100vw"
        bgSize="cover"
        justifyContent="center"
        alignItems="center"
        px={4}
      >
        <Flex minH="60vh" flexDir="column" gap={10} w="100%">
          <Image src="/images/benefit-header.svg" width={{ base: "90vw", md: "64vw" }} mx="auto"/>
          <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center" gap={6}>
            <Image src="/images/benefit-1.svg" width={{ base: "80vw", md: "19.1vw" }} mx="auto" cursor="pointer"/>
            <Image src="/images/benefit-2.svg" width={{ base: "80vw", md: "19.1vw" }} mx="auto" cursor="pointer"/>
            <Image src="/images/benefit-3.svg" width={{ base: "80vw", md: "19.1vw" }} mx="auto" cursor="pointer"/>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Benefits;