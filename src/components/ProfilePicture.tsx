import { Box, ChakraStyledOptions } from "@chakra-ui/react";

interface ProfilePicture extends ChakraStyledOptions {
    pictureUrl: string;
    children: JSX.Element | JSX.Element[];
}

export function ProfilePicture({ pictureUrl, children, ...rest }: ProfilePicture) {
    return (
        <Box
            bgImage={`${pictureUrl}`}
            bgSize={{ sm: "400px", lg: "400px", xl: "525px" }}
            bgRepeat="no-repeat"
            rounded="full"
            h={{ sm: "350px", lg: "350px", xl: "450px" }}
            w={{ sm: "350px", lg: "350px", xl: "450px" }}
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