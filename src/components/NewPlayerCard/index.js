import React from 'react'
import { Grid, Flex, Box, VStack, HStack, Text, Image, Badge } from "@chakra-ui/react";

const Player = {
    "name": "Agine Prosper",
    "age": 15,
    "image": "https://res.cloudinary.com/broomstick/image/upload/t_spives_watermark/v1713292025/talents/Agine_Prosper_lfnh2k.png",
    "mainPosition": "Defense",
    "positions": "CAM,CDM,LAM",
    "height": "",
    "weight": "53.4Kg",
    "club": "Future Kids FC",
    "guardian": "",
    "coach": "Gideon",
    "foot": "Right",
    "id": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    "nickname": "The Wall",
    "summary": "The Wall: A towering center-back known for his commanding presence in defense and aerial dominance. With a knack for timely tackles and clearances, he's a reliable anchor for any team's backline. Off the pitch, he's a dedicated student with a passion for strategy, aiming to pursue a professional career while representing Nigeria and dreaming of playing for Arsenal in the Premier League."
}

export const NewPlayerCard = ({ player = Player }) => {
    const positions = player.positions.split(',').map(position => position.trim())
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
                        <Image src={player.country} alt="Country flag" maxWidth={'50px'} />
                        <Image src={player.club} alt="Logo" maxWidth={'50px'} />
                    </HStack>

                    <Image src={player.image} alt="Player" />

                </VStack>
                <Grid p={1} columnGap={1} templateColumns={'65% 1fr'} borderRadius={5} minHeight={'60px'} backgroundColor={'#000066'} >
                    <Flex direction={'column'} backgroundColor={'white'} borderRadius={5} justifyContent={'space-between'} padding={3} >
                        <Box textAlign={'left'}>
                            <Text fontSize={'md'} as='b'>{player.name}</Text>
                            <Text fontSize={'sm'}>{player.mainPosition}</Text>
                            <Text fontSize={'sm'}>14</Text>
                            <Text fontSize={'sm'}>Left Footer</Text>
                        </Box>
                        <HStack justifyContent={'space-between'} alignItems={'center'} >
                            <Grid templateColumns={'1fr 1fr 1fr'} columnGap={1}>
                                <Image src={`/assets/Positions/${positions[0]} spives.png`} alt="position1" boxSize={'30px'} />
                                <Image src={`/assets/Positions/${positions[1]} spives.png`} alt="position1" boxSize={'30px'} />
                                <Image src={`/assets/Positions/${positions[2]} spives.png`} alt="position1" boxSize={'30px'} />
                            </Grid>
                            <Grid templateRows={'repeat(2 1fr'}>
                                <Text fontSize={'xs'}>10</Text>
                                <Text fontSize={'xs'}>APPS</Text>
                            </Grid>
                        </HStack>
                    </Flex>
                    <Box>
                        <Image src="/assets/newpitch.png" alt="Logo" />
                    </Box>
                </Grid>
            </VStack>
        </Box>
    );
};