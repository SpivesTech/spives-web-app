import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="header-navbar">
      <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
        <Box className="feature-section">
          <Image src="/images/spives.png" className="image-container" alt="spives logo" />
        </Box>
        <Flex alignItems="center" display={{ base: 'block', md: 'none' }}>
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          className="feature-panel"
          justifyContent="flex-end"
        >
          <Box className="flex-container-with-text-aligned">
            <Link to="/" className="feature-title">Features</Link>
            <Link to="/pricing" className="feature-description-text-style">Pricing</Link>
          </Box>
          <Box className="flex-container-with-text-aligned">
            <Button as={Link} to="/login" className="primary-button-style">Login</Button>
            <Button as={Link} to="/signup" className="orange-button">Get Started</Button>
          </Box>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="center" mt={8}>
              <HStack>
                <Link to="/" onClick={onClose}>Features</Link>
              </HStack>
              <HStack>
                <Link to="/pricing" onClick={onClose}>Pricing</Link>
              </HStack>
              <HStack>
                <Button as={Link} to="/login" className="primary-button-style" onClick={onClose}>Login</Button>
              </HStack>
              <HStack>
                <Button as={Link} to="/signup" className="orange-button" onClick={onClose}>Get Started</Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Navbar;
