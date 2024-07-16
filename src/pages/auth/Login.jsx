import React, { useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Link,
  Card,
  CardBody,
  CardFooter,
  Image,
  Spacer,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import '../../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login attempt with:', email, password);
  };

  return (
    <div className="login">
      <div className="container">
        <Flex color={'white'} direction={'column'} alignItems={'center'}>
          <Flex marginBottom={'10px'}>
            <Heading marginRight={'5px'}>Welcome</Heading>
            <Heading color={'orange'}>Back</Heading>
          </Flex>
          <Text color={'white'}>Please login your account details</Text>
        </Flex>

        <Box width="25%" minWidth={'300px'} marginTop={'50px'}>
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
                <Flex justifyContent={'space-between'} my={4}>
                  <Text color={'orange'} fontSize={'sm'}>
                    <Link as={RouterLink} to="/signup">
                      Create Account
                    </Link>
                  </Text>
                  <Text color={'blue'} fontSize={'sm'}>
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
        <Image src="/images/soccerball1.png" className="loginFooterBall" />
      </div>
    </div>
  );
};

export default Login;