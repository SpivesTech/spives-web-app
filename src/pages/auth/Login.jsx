import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  FormControl,
  Input,
  Button,
  Text,
  Link,
  Card,
  CardBody,
  Image,
  Container,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../../components/Navbar'; // Import Navbar
import Footer from '../../components/Footer'; // Import Footer

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const endpoint = 'https://spives-backend.onrender.com/api/auth/users/login/';
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(endpoint, { email, password });
    sessionStorage.setItem('token', JSON.stringify(res.data.access_token));
    const decoded = jwtDecode(res.data.access_token);
    setUser(decoded);
    const userRoute = `/dashboard/${decoded.user_id}`;
    navigate(userRoute);
    console.log('user', userRoute);
  };

  return (
    <Box>
      <Navbar /> {/* Add Navbar */}
      <Flex
        minHeight="calc(100vh - 64px)" // Adjust for Navbar height
        bgImg="url(/images/hero-bg.png)"
        alignItems="center"
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#03033E',
          opacity: 0.8,
          zIndex: 1,
        }}
      >
        <Container maxW="container.xl" position="relative" zIndex={2}>
          <Flex direction="column" alignItems="center">
            <Flex marginBottom={'30px'}>
              <Text
                fontSize={'3vmax'}
                className="loginHeading"
                marginRight={'px'}
                color="white"  // Ensure "Welcome" remains white
              >
                Welcome <span style={{ color: "#FF9434" }}> back</span>
              </Text>
            </Flex>
            <Text fontSize={'2vmin'} color={'white'} mb={8}>
              Please login your account details
            </Text>

            <Box width="100%" maxWidth="400px">
              <Card>
                <CardBody>
                  <form onSubmit={handleSubmit}>
                    <FormControl id="email" isRequired>
                      <Input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email Address"
                      />
                    </FormControl>
                    <FormControl id="password" isRequired mt={4}>
                      <Input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </FormControl>
                    <Flex
                      justifyContent={'space-between'}
                      my={4}
                      fontWeight={'bolder'}
                    >
                      <Text color={'#FF9434'} fontSize={'xs'}>
                        <Link as={RouterLink} to="/signup">
                          Create Account
                        </Link>
                      </Text>
                      <Text color={'#000066'} fontSize={'xs'}>
                        <Link>Forgotten Password</Link>
                      </Text>
                    </Flex>
                    <Button
                      type="submit"
                      backgroundColor="#000066"
                      color={'white'}
                      width="full"
                      mt={4}
                    >
                      Log In
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Box>
          </Flex>
        </Container>
      </Flex>
      <Footer /> {/* Add Footer */}
    </Box>
  );
};

export default Login;