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
                        <Image src="/images/NaijaFlag.png" alt="Country flag" boxSize="30px" />
                        <Image src="/assets/spivesinc fc.png" alt="Logo" boxSize="30px" />
                    </HStack>

                    <Image src="https://res.cloudinary.com/broomstick/image/upload/t_spives_watermark/v1713292025/talents/Agine_Prosper_lfnh2k.png" alt="Player" />

                </VStack>
                <Grid p={1} columnGap={1} templateColumns={'60% 39%'} borderRadius={5} height={52} backgroundColor={'#000066'} >
                    <Box backgroundColor={'white'} borderRadius={5}>
                        <h1>Test</h1>
                    </Box>
                    <Box>
                        <Image src="/assets/newpitch.png" alt="Logo" minHeight={'100%'} />
                    </Box>
                </Grid>
            </VStack>
        </Box>
    );
};