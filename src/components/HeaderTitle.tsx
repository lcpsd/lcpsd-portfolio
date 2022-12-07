import { Box, Button, ChakraStyledOptions, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

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
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl", xl: "7xl" }}
                bgGradient="linear(to-t, tertiary, primary)"
                backgroundClip="text"
                textColor="transparent"
                fontWeight="semibold"
                lineHeight={{ base: "2rem", lg: "4rem" }}
                mt={{ base: 5, md: 0 }}
            >Desenvolvedor Full Stack</Text>

            <Text
                textTransform="uppercase"
                fontSize={["md", "xl", "2xl"]}
                mb={{ base: 5, md: 10 }}
            >React | Next | TS | Chakra UI | Mongo DB
            </Text>

            <Box w="100%">
                <Link href="https://forms.gle/YvM2GEirsMQqCUPQ6" target="_blank">
                    <Button
                        w="100%"
                        maxW="300px"
                        bg="primary"
                        color="black"
                        fontSize={20}
                        _hover={{
                            filter: "opacity(0.8)"
                        }}
                    >Orçamento</Button>
                </Link>
                <Text fontSize={12}>Sem compromisso</Text>
            </Box>
        </Flex>
    )
}