import React from 'react'
import { Grid, Flex, Box, VStack, HStack, Text, Image, Badge } from "@chakra-ui/react";

export const NewPlayerCard = () => {
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
                        <Image src="/images/NaijaFlag.png" alt="Country flag" maxWidth={'50px'} />
                        <Image src="/assets/spivesinc fc.png" alt="Logo" maxWidth={'50px'} />
                    </HStack>

                    <Image src="https://res.cloudinary.com/broomstick/image/upload/t_spives_watermark/v1713292025/talents/Agine_Prosper_lfnh2k.png" alt="Player" />

                </VStack>
                <Grid p={1} columnGap={1} templateColumns={'65% 1fr'} borderRadius={5} minHeight={'60px'} backgroundColor={'#000066'} >
                    <Flex direction={'column'} backgroundColor={'white'} borderRadius={5} justifyContent={'space-between'} padding={3} >
                        <Box textAlign={'left'}>
                            <Text fontSize={'md'} as='b' >KidWonder1389</Text>
                            <Text fontSize={'sm'}>CAM</Text>
                            <Text fontSize={'sm'}>14</Text>
                            <Text fontSize={'sm'}>Left Footer</Text>
                        </Box>
                        <HStack justifyContent={'space-between'} alignItems={'center'} >
                            <Grid templateColumns={'1fr 1fr 1fr'} columnGap={1}>
                                <Image src="/assets/Positions/CAM spives.png" alt="position1" boxSize={'30px'} />
                                <Image src="/assets/Positions/CAM spives.png" alt="position1" boxSize={'30px'} />
                                <Image src="/assets/Positions/CAM spives.png" alt="position1" boxSize={'30px'} />

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