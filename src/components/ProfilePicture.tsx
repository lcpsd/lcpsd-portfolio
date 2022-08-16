import { Box, ChakraStyledOptions } from "@chakra-ui/react";

interface ProfilePicture extends ChakraStyledOptions {
    pictureUrl: string;
    children: JSX.Element | JSX.Element[];
}

export function ProfilePicture({ pictureUrl, children, ...rest }: ProfilePicture) {
    return (
        <Box
            bgImage={`${pictureUrl}`}
            bgPos="0 -2.5rem"
            bgSize="450px"
            bgRepeat="no-repeat"
            rounded="full"
            h="450px"
            w="450px"
            borderColor="primary !important"
            border="2px"
            boxShadow="0px 0px 200px 0px #00FFD1"
            position="relative"
            {...rest}
        >
            {children}
        </Box>
    )
}