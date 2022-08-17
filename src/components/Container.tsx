import { ChakraStyledOptions, Flex } from "@chakra-ui/react";

interface ContainerProps extends ChakraStyledOptions {
    children: JSX.Element | JSX.Element[];
}

export function Container({ children, ...rest }: ContainerProps) {

    return (
        <Flex direction="column" h="100vh" align="center" py={10} position="relative" zIndex="10" {...rest}>
            {children}
        </Flex>
    )
}