import { Box } from "@chakra-ui/react";

export function BgNoise() {

    return (
        <Box
            bgImg="/images/scratch-seamless.webp"
            backgroundRepeat="repeat"
            h="100%"
            w="100%"
            position="absolute"
            zIndex="-2"
            bgSize="200px"
            mixBlendMode="hard-light"
            opacity="0.1"
        />
    )
}