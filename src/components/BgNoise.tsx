import { Box } from "@chakra-ui/react";

export function BgNoise() {

    return (
        <Box
            bgImg="/images/noise.webp"
            backgroundRepeat="repeat"
            h="100%"
            w="600vh"
            position="absolute"
            zIndex="-10"
            bgSize="200px"
            mixBlendMode="hard-light"
            opacity="0.1"
        />
    )
}