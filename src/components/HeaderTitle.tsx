import { Flex, Text } from "@chakra-ui/react";

export function HeaderTitle() {

    return (
        <Flex flex="1" align="center" justify="center" direction="column" textAlign="center">
            <Text
                textTransform="uppercase"
                fontSize="8xl"
                bgGradient="linear(to-t, tertiary, primary)"
                backgroundClip="text"
                textColor="transparent"
                w="600px"
                fontWeight="semibold"
                lineHeight="5rem"
            >Front-end JamStack</Text>

            <Text
                textTransform="uppercase"
                fontSize="3xl"
            >React | Next | TS | Chakra UI  E +
            </Text>
        </Flex>
    )
}