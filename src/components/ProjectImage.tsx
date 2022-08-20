import { ChakraStyledOptions, Img } from "@chakra-ui/react";

interface ProjectImageProps extends ChakraStyledOptions {
    screenshotUrl: string;
}

export function ProjectImage({ screenshotUrl, ...rest }: ProjectImageProps) {

    return (
        <Img
            src={screenshotUrl}
            rounded="md"
            position="absolute"
            my="auto"
            mx="auto"
            maxW="400px"
            w="60%"
            h="auto"
            border="1px"
            borderRightColor="primary"
            {...rest}
        />
    )
}