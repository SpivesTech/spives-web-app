import React from 'react'
import { Grid, Flex, Box, VStack, HStack, Text, Image, Badge } from "@chakra-ui/react";
import { Pitch } from '../Pitch';

const Player = {
    "name": "Agine Prosper",
    "age": 15,
    "image": "https://res.cloudinary.com/broomstick/image/upload/t_spives_watermark/v1713292025/talents/Agine_Prosper_lfnh2k.png",
    "mainPosition": "Defense",
    "position": "CAM",
    "height": "",
    "weight": "53.4Kg",
    "club": "Future Kids FC",
    "guardian": "",
    "coach": "Gideon",
    "country": "Mozambique",
    "foot": "Right",
    "id": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    "nickname": "The Wall",
    "summary": "The Wall: A towering center-back known for his commanding presence in defense and aerial dominance. With a knack for timely tackles and clearances, he's a reliable anchor for any team's backline. Off the pitch, he's a dedicated student with a passion for strategy, aiming to pursue a professional career while representing Nigeria and dreaming of playing for Arsenal in the Premier League."
}

export const NewPlayerCard = ({ player = Player }) => {
    const positions = player.position.split(/,\s*|\//).map(position => position.trim())
    const teamAbbreviation = player.club.split(' ').map(word => word[0]).join('')
    return (
        <Box
            borderWidth="1px"
            backgroundColor={"#e0e0e0"}
            borderRadius="lg"
            overflow="hidden"
            // boxShadow="md"
            maxW="sm"
            padding={2}
        >
            <VStack align="stretch" >
                <VStack justifyContent="space-between" p={2} backgroundImage={"/images/favicon2.png"} borderRadius={5} backgroundRepeat={'no-repeat'} backgroundSize={'cover'} backgroundPosition={'center center'} backgroundColor={'white'} >
                    <HStack justifyContent="space-between" w="100%">
                        {player.flag ? <Image src={player.flag} alt="Country flag" maxWidth={'50px'} /> : <Badge colorScheme="blue">{player.country}</Badge>}
                        {player.clubLogo ? <Image src={player.clubLogo} alt="Logo" maxWidth={'50px'} /> : <Badge colorScheme="blue">{teamAbbreviation}</Badge>}
                    </HStack>

                    <Image src={player.image} alt="Player" />

                </VStack>
                <Grid p={1} columnGap={1} templateColumns={'65% 1fr'} borderRadius={5} minHeight={'60px'} backgroundColor={'#000066'} >
                    <Flex direction={'column'} backgroundColor={'white'} borderRadius={5} justifyContent={'space-between'} padding={3} >
                        <Box textAlign={'left'}>
                            <Text fontSize={'md'} as='b'>{player.nickname}</Text>
                            <Text fontSize={'sm'}>{player.mainPosition}</Text>
                            <Text fontSize={'sm'}>14</Text>
                            <Text fontSize={'sm'}>Left Footer</Text>
                        </Box>
                        <HStack justifyContent={'space-between'} alignItems={'center'} >
                            <Grid templateColumns={'1fr 1fr 1fr'} columnGap={1}>
                                {
                                    positions.map((position, index) => (
                                        <Image key={index} src={`/assets/Positions/${position} spives.png`} alt={position} boxSize={'30px'} />
                                    ))
                                }
                            </Grid>
                            <Grid templateRows={'repeat(2 1fr'}>
                                <Text fontSize={'xs'}>10</Text>
                                <Text fontSize={'xs'}>APPS</Text>
                            </Grid>
                        </HStack>
                    </Flex>
                    <Box height={"100%"}>
                        <Pitch playerPositions={positions} height="100%" />
                    </Box>
                </Grid>
            </VStack>
        </Box>
    );
};