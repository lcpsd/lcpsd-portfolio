import { ChakraStyledOptions, Text } from "@chakra-ui/react";

interface DefaultTitleProps extends ChakraStyledOptions {
    title: string;
}

export function DefaultTitle({ title, ...rest }: DefaultTitleProps) {

    return (
        <Text color="primary" fontSize="4xl" {...rest}>{title}</Text>
    )
}