import { ChakraStyledOptions, Flex, Text } from "@chakra-ui/react";

export function HeaderTitle({ ...rest }: ChakraStyledOptions) {

    return (
        <Flex
            align="center"
            justify="center"
            direction="column"
            textAlign="center"
            {...rest}
        >
            <Text
                textTransform="uppercase"
                fontSize={["2xl", "6xl", "7xl"]}
                bgGradient="linear(to-t, tertiary, primary)"
                backgroundClip="text"
                textColor="transparent"
                fontWeight="semibold"
                lineHeight="4rem"
            >Front-end JamStack</Text>

            <Text
                textTransform="uppercase"
                fontSize={["md", "xl", "2xl"]}
            >React | Next | TS | Chakra UI  E +
            </Text>
        </Flex>
    )
}