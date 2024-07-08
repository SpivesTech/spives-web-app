import React from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Box className="header-navbar" position="sticky" top="0" zIndex="1000" bg="white">
      <Flex alignItems="center" justifyContent="space-between" wrap="wrap" p={4}>
        <Box className="feature-section">
          <Link to="/">
            <Image src="/images/spives.png" className="image-container" alt="spives logo" />
          </Link>
        </Box>

        {/* Desktop Menu */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
        >
          <HStack spacing={4} mr={4}>
            <Link to="/" className="feature-title">Clubs</Link>
            <Link to="/" className="feature-title">Coaches</Link>
            <Link to="/talents" className="feature-title">Talents</Link>
            <Link to="/pricing" className="feature-description-text-style">Pricing</Link>
          </HStack>
          <HStack spacing={2}>
            <Button 
              as={Link} 
              to="/login" 
              bg="#000066"
              color="white"
              _hover={{ bg: '#000088' }}
            >
              Login
            </Button>
            <Button 
              as={Link} 
              to="/signup" 
              bg="#FF9434"
              color="white"
              _hover={{ bg: '#FFB434' }}
            >
              Get Started
            </Button>
          </HStack>
        </Flex>

        {/* Mobile Menu */}
        <Box display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
            />
            <MenuList>
              <MenuItem as={Link} to="/">Clubs</MenuItem>
              <MenuItem as={Link} to="/">Coaches</MenuItem>
              <MenuItem as={Link} to="/">Talents</MenuItem>
              <MenuItem as={Link} to="/pricing">Pricing</MenuItem>
              <MenuItem as={Link} to="/login">Login</MenuItem>
              <MenuItem as={Link} to="/signup">Get Started</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
