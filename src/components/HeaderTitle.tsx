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
                fontSize={["5xl", "6xl", "7xl"]}
                bgGradient="linear(to-t, tertiary, primary)"
                backgroundClip="text"
                textColor="transparent"
                fontWeight="semibold"
                lineHeight="4rem"
            >Desenvolvedor Full Stack</Text>

            <Text
                textTransform="uppercase"
                fontSize={["lg", "xl", "2xl"]}
            >Next.js | Typescript | Chakra UI | Mongo DB
            </Text>
        </Flex>
    )
}