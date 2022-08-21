import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Tech } from "../models";

interface TechCardProps {
    data: Tech;
}

export function TechCard({ data: { id, logoUrl, description } }: TechCardProps) {

    return (
        <Flex key={id}
            h="100%"
            w="100%"
            p={5}
            bg="#161325"
            border="1px"
            borderColor="transparent"
            borderBottomColor="primary"
            gap={5}
        >
            <Flex flex="1" align="center" justify="center">
                <Img
                    src={logoUrl ?? ""}
                    h="auto"
                    w="100%"
                    maxH="100px"
                    maxW="100px"
                />
            </Flex>

            <Flex align="center" justify="center" flex="2" p={2}>
                <Text fontSize="1rem">{description}</Text>
            </Flex>
        </Flex>
    )
}