import React from "react";
import { Box, Button, Heading, Text, Flex, List, ListItem, Image, Link, UnorderedList } from "@chakra-ui/react";

export default function Header({ ...props }) {
    return (
      <Flex
        {...props}
        bg="white.400"
        justifyContent="space-between"
        alignItems="start"
        gap="20px"
        px={{ md: "46px", base: "16px", sm: "20px" }}
        py="12px"
        flexDirection={{ md: "row", base: "column" }}
        as="header"
      >
        <Image src="images/img_header_logo.png" h="28px" mb="6px" w="128px" fit="contain" />
        <Flex mb="6px" mr="24px" justifyContent="center" alignItems="center">
          <UnorderedList styleType="none" mb="4px !important" gap="34px" display="flex" flexWrap="wrap">
            <ListItem>
              <Link href="#">
                <Text size="textlg" color="black.900">
                  Features
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text size="textlg" color="black.900">
                  Pricing
                </Text>
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex>
          <Button ml={{ base: "0px", sm: "56px" }} fontWeight={700} minW="88px" borderRadius="4px" fontSize="13px">
            Login
          </Button>
          <Button colorScheme="orange.400" ml={{ base: "0px", sm: "28px" }} fontWeight={700} minW="136px" borderRadius="4px" fontSize="13px">
            Get Started
          </Button>
        </Flex>
      </Flex>
    );
  }
  