import { Box, ChakraStyledOptions } from "@chakra-ui/react";

interface BigLightProps extends ChakraStyledOptions { }

export function BigLight({ ...rest }) {


    return (
        <Box
            position="absolute"
            h={{ base: "400vw", lg: "250vw" }}
            w={{ base: "400vw", lg: "250vw" }}
            rounded="full"
            bgGradient='radial-gradient(secondary, transparent, transparent)'
            filter="brightness(0.4)"
            opacity="1"
            zIndex="-10"
            {...rest}
        />
    )
}