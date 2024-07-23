import React, { useState } from 'react';
import { Grid, Image, Box, Icon, Text, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const PositionSelect = () => {
  const positions = [
    'GK',
    'CB',
    'LCB',
    'RCB',
    'RB',
    'LB',
    'RWB',
    'LWB',
    'CDM',
    'CM',
    'CAM',
    'LM',
    'RM',
    'RAM',
    'LAM',
    'LW',
    'RW',
    'RWF',
    'LWF',
    'CF',
    'SS',
  ];

  const [checkedPositions, setCheckedPositions] = useState({});

  const handleClick = position => {
    setCheckedPositions(prev => {
      const newState = { ...prev };
      if (newState[position]) {
        // If the position is already checked, uncheck it
        delete newState[position];
      } else {
        // If the position is not checked
        const checkedCount = Object.keys(newState).length;
        if (checkedCount < 4) {
          // If less than 4 positions are checked, add the new one
          newState[position] = true;
        } else {
          // If 4 positions are already checked, don't add a new one
          return prev;
        }
      }
      return newState;
    });
  };

  return (
    <div className="fieldBG">
      <div className="container">
        <Text
          color={'#FF9434'}
          fontSize={'5vmin'}
          marginBottom={'10px'}
          className="loginHeading"
        >
          Select Positions
        </Text>
        <Text fontSize={'3vmin'} color={'white'} marginBottom={'50px'}>
          Pick up to four different positions you feel very comfortable playing.
        </Text>
        <Grid className="positionButtonsGrid">
          {positions.map((position, index) => (
            <Box key={index} position="relative">
              <Image
                className={`positionButton ${
                  checkedPositions[position] ? 'checked' : ''
                }`}
                src={`./assets/positions/${position} spives.png`}
                alt={position}
                onClick={() => handleClick(position)}
                filter={checkedPositions[position] ? 'grayscale(100%)' : 'none'}
                transition="all 0.3s"
                _hover={{ transform: 'scale(1.05)' }}
                opacity={
                  Object.keys(checkedPositions).length >= 4 &&
                  !checkedPositions[position]
                    ? 0.5
                    : 1
                }
              />
              {checkedPositions[position] && (
                <Icon
                  as={CheckCircleIcon}
                  position="absolute"
                  top="5px"
                  right="5px"
                  color="#FF9434"
                  boxSize="24px"
                />
              )}
            </Box>
          ))}
        </Grid>
        <Button>Create Profile</Button>
      </div>
    </div>
  );
};

export default PositionSelect;
