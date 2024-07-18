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
  VStack,
  Select,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import Countries from '../../utils/countries';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [club, setClub] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [stateRegion, setStateRegion] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const endpoint = 'https://spives-backend.onrender.com/api/auth/players/';
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      await axios.post(endpoint, {
        name: fullName,
        date_of_birth: dateOfBirth,
        email,
        club,
        nickname,
        phone_number: phoneNumber,
        country,
        state_region: stateRegion,
        password,
      });

      navigate('/talents');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div
      className="register"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <div
        className="container"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '2rem',
        }}
      >
        <Flex color={'white'} direction={'column'} alignItems={'center'} mb={4}>
          <Text
            fontSize={'2.5vmax'}
            className="loginHeading"
            marginRight={'px'}
          >
            Create a <span>profile</span>
          </Text>
          <Text fontSize={'1.5vmin'} color={'white'}>
            We believe that you deserved to be seen
          </Text>
          <Text fontSize={'1.5vmin'}>create a spives account now</Text>
        </Flex>
        <Box width="100%" maxWidth="400px" margin="0 auto">
          <Card backgroundColor="transparent">
            <CardBody>
              <form onSubmit={handleSubmit} backgroundColor={'transparent'}>
                <VStack spacing={3}>
                  <FormControl id="fullName" isRequired>
                    <Input
                      size="sm"
                      type="text"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      placeholder="Full Name"
                    />
                  </FormControl>
                  <FormControl id="dateOfBirth" isRequired>
                    <Input
                      size="sm"
                      type="date"
                      value={dateOfBirth}
                      onChange={e => setDateOfBirth(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <Input
                      size="sm"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Email Address"
                    />
                  </FormControl>
                  <FormControl id="club" isRequired>
                    <Input
                      size="sm"
                      type="text"
                      value={club}
                      onChange={e => setClub(e.target.value)}
                      placeholder="Club"
                    />
                  </FormControl>
                  <FormControl id="nickname">
                    <Input
                      size="sm"
                      type="text"
                      value={nickname}
                      onChange={e => setNickname(e.target.value)}
                      placeholder="Nickname"
                    />
                  </FormControl>
                  <FormControl id="phoneNumber" isRequired>
                    <Input
                      size="sm"
                      type="tel"
                      value={phoneNumber}
                      onChange={e => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number"
                    />
                  </FormControl>
                  <FormControl id="country" isRequired>
                    <Select
                      bg={'white'}
                      borderRadius={'8px'}
                      size="sm"
                      placeholder="Select Country"
                      value={country}
                      onChange={e => setCountry(e.target.value)}
                    >
                      {Countries.map((country, index) => (
                        <option key={index} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl id="stateRegion" isRequired>
                    <Input
                      size="sm"
                      type="text"
                      value={stateRegion}
                      onChange={e => setStateRegion(e.target.value)}
                      placeholder="State/Region"
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <Input
                      size="sm"
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="Create Password"
                    />
                  </FormControl>
                  <FormControl id="confirmPassword" isRequired>
                    <Input
                      size="sm"
                      type="password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                    />
                  </FormControl>
                </VStack>
                <Flex
                  justifyContent={'space-between'}
                  my={4}
                  fontWeight={'bolder'}
                >
                  <Text color={'#FF9434'} fontSize={'xs'}>
                    <Link as={RouterLink} to="/login">
                      Already have an account? Log in
                    </Link>
                  </Text>
                </Flex>
                <Button
                  type="submit"
                  backgroundColor="#000066"
                  color={'white'}
                  width="full"
                  size="sm"
                >
                  Sign Up
                </Button>
              </form>
            </CardBody>
          </Card>
        </Box>
        <Image
          src="/images/soccerball1.png"
          className="loginFooterBall"
          style={{
            alignSelf: 'flex-end',
            maxWidth: '100px',
            marginTop: '1rem',
          }}
        />
      </div>
    </div>
  );
};

export default Signup;
