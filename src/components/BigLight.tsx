import { Box, ChakraStyledOptions } from "@chakra-ui/react";

interface BigLightProps extends ChakraStyledOptions { }

export function BigLight({ ...rest }) {


    return (
        <Box
            position="absolute"
            h="200vw"
            w="200vw"
            rounded="full"
            bgGradient='radial-gradient(primary, transparent, transparent)'
            filter="brightness(0.8)"
            opacity="0.2"
            zIndex="-10"
            {...rest}
        />
    )
}