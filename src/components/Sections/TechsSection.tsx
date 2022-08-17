import { Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { Container } from "../Container";
import { DefaultTitle } from "../DefaultTitle";

export function TechSection() {

    const techs = [
        {
            id: 1,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 2,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 3,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 4,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 5,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 6,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 7,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 8,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 9,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 10,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 11,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 12,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
    ]

    return (
        <Container>

            <DefaultTitle title='Tecnologias' />

            <SimpleGrid columns={3} spacing={10} mt="1rem">
                {
                    techs.map(tech => (
                        <Flex key={tech.id}
                            h="100%"
                            maxH="150px"
                            w="100%"
                            p={2}
                            bg="quinary"
                            border="1px"
                            borderColor="primary"
                            rounded="md"
                        >
                            <Img
                                src={tech.logoUrl}
                                flex="1"
                                h="100%"
                                w="auto"
                            />

                            <Flex
                                align="center"
                                justify="center"
                                flex="3"
                                p={2}
                            >
                                <Text fontSize="0.8rem">{tech.description}</Text>
                            </Flex>
                        </Flex>
                    ))
                }
            </SimpleGrid>
        </Container>
    )
}