import { ChakraStyledOptions, Img } from "@chakra-ui/react";

interface ProjectImageProps extends ChakraStyledOptions {
    screenshotLink: string;
}

export function ProjectImage({ screenshotLink, ...rest }: ProjectImageProps) {

    return (
        <Img
            w="sm"
            h="auto"
            src={screenshotLink}
            rounded="md"
            position="absolute"
            my="auto"
            mx="auto"
            {...rest}
        />
    )
}