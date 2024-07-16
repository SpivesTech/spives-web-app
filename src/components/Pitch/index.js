import { Box, Image } from "@chakra-ui/react";

export const Pitch = ({ playerPositions }) => {
    const positions = [
        { name: "GK", top: "90%", left: "50%" },
        { name: "CB", top: "75%", left: "50%" },
        { name: "LCB", top: "75%", left: "35%" },
        { name: "RCB", top: "75%", left: "65%" },
        { name: "LB", top: "70%", left: "15%" },
        { name: "RB", top: "70%", left: "85%" },
        { name: "CM", top: "50%", left: "50%" },
        { name: "CDM", top: "65%", left: "50%" },
        { name: "CAM", top: "35%", left: "50%" },
        { name: "LAM", top: "35%", left: "35%" },
        { name: "RAM", top: "35%", left: "65%" },
        { name: "LM", top: "50%", left: "15%" },
        { name: "RM", top: "50%", left: "85%" },
        { name: "LW", top: "25%", left: "25%" },
        { name: "RW", top: "25%", left: "75%" },
        { name: "LWB", top: "60%", left: "25%" },
        { name: "RWB", top: "60%", left: "75%" },
        { name: "SS", top: "25%", left: "50%" },
        { name: "CF", top: "15%", left: "50%" },
    ];

    return (
        <Box position="relative" height={"100%"}>
            <Image src="/assets/newpitch.png" alt="Football field" width="100%" height="100%" />
            {positions.map((pos) => (
                <Image
                    key={pos.name}
                    src={`/assets/Positions/${pos.name} spives.png`}
                    alt={pos.name}
                    position="absolute"
                    top={pos.top}
                    left={pos.left}
                    transform="translate(-50%, -50%)"
                    width="15px"
                    height="15px"
                    display={playerPositions.includes(pos.name) ? "block" : "none"}
                />
            ))}
        </Box>
    );
};