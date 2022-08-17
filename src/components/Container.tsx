import { ChakraStyledOptions, Flex } from "@chakra-ui/react";

interface ContainerProps extends ChakraStyledOptions {
    children: JSX.Element | JSX.Element[];
}

export function Container({ children, ...rest }: ContainerProps) {

    return (
        <Flex direction="column" h="100vh" align="center" justify="center" py={10} zIndex="10" {...rest}>
            {children}
        </Flex>
    )
}