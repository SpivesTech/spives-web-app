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
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const endpoint = 'https://spives-backend.onrender.com/api/auth/users/login/';
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    //make a post request to this endpoint: https://spives-backend.onrender.com/api/auth/users/login/
    // with body: { "email":"email@host.com", "password":"12345Password" }
    // make a request to the endpoint with the email and password
    // if the request is successful, redirect to the dashboard
    // if the request is not successful, show an error message
    const res = await axios.post(endpoint, { email, password });
    sessionStorage.setItem('token', JSON.stringify(res.data.access_token));
    const decoded = jwtDecode(res.data.access_token);
    setUser(decoded);
    const userRoute = `/dashboard/${decoded.user_id}`;
    navigate(userRoute);
    console.log('user', userRoute);
  };

  return (
    <div className="login fieldBG">
      <div className="container">
        <Flex color={'white'} direction={'column'} alignItems={'center'}>
          <Flex marginBottom={'30px'}>
            <Text
              fontSize={'3vmax'}
              className="loginHeading"
              marginRight={'px'}
            >
              Welcome <span> back</span>
            </Text>
          </Flex>
          <Text fontSize={'2vmin'} color={'white'}>
            Please login your account details
          </Text>
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
        {/* <Image src="/images/soccerball1.png" className="loginFooterBall" /> */}
      </div>
    </div>
  );
};

export default Login;