import { Text, Flex, AbsoluteCenter, Image, Box } from "@chakra-ui/react";
import React, { Suspense } from "react";

const data = [
  { trainingImage: "images/img_training_image.png", trainingText: "training", scheduleText: "Schedule" },
  { trainingImage: "images/img_spivesboy1.png", trainingText: "player", scheduleText: "management" },
  { trainingImage: "images/img_small_pitch1.png", trainingText: "tactics", scheduleText: "& formations" },
];

export default function LandingPageListTraining({ ...props }) {
  return (
    <Flex
      {...props}
      pl="60px"
      pr="56px"
      flex={1}
      py="82px"
      flexDirection={{ md: "row", base: "column" }}
      px={{ md: "46px", base: "16px", sm: "20px" }}
    >
      <Suspense fallback={<div>loading feed...</div>}>
        {data.map((d, index) => (
          <Box
            key={"trainingList" + index}
            h={{ md: "466px", base: "auto" }}
            mb={{ md: "14px", base: "0px" }}
            mt={{ md: "14px", base: "0px" }}
            position="relative"
          >
            <Image src={d.trainingImage} h="466px" flex={1} fit="cover" w="100%" />
            <AbsoluteCenter
              bg="gray.900_9e"
              flex={1}
              h="max-content"
              w="max-content"
              px="30px"
              py="8px"
              mt={{ md: "54px", base: "54px", sm: "20px" }}
              p={{ base: "16px", sm: "" }}
            >
              <Flex mt="24px" flexDirection="column" alignItems="start">
                <Text
                  color="orange.400"
                  zIndex={6}
                  position="relative"
                  fontSize={{ md: "medium", base: "28px", sm: "34px" }}
                >
                  {d.trainingText}
                </Text>
                <Text
                  color="white.400"
                  fontSize={{ md: "medium", base: "28px", sm: "34px" }}
                >
                  {d.scheduleText}
                </Text>
              </Flex>
            </AbsoluteCenter>
          </Box>
        ))}
      </Suspense>
    </Flex>
  );
}
