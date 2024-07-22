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
      >
        <Flex minH="60vh" flexDir="column" gap={10}>
          <Image src="/images/benefit-header.svg" width="64vw" mx="auto"/>
          <Flex justifyContent={'space-between'}>
            <Image src="/images/benefit-1.svg" width="19.1vw" mx="auto" cursor="pointer"/>
            <Image src="/images/benefit-2.svg" width="19.1vw" mx="auto" cursor="pointer"/>
            <Image src="/images/benefit-3.svg" width="19.1vw" mx="auto" cursor="pointer"/>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Benefits;
