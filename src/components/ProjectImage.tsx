import { ChakraStyledOptions, Img } from "@chakra-ui/react";

interface ProjectImageProps extends ChakraStyledOptions {
    screenshotUrl: string;
}

export function ProjectImage({ screenshotUrl, ...rest }: ProjectImageProps) {

    return (
        <Img
            w="sm"
            h="auto"
            src={screenshotUrl}
            rounded="md"
            position="absolute"
            my="auto"
            mx="auto"
            {...rest}
        />
    )
}