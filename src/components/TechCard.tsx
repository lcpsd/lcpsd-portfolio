import { Box, Flex, Img, Text } from "@chakra-ui/react";

interface TechCardProps {
    data: {
        id: string | number;
        logoUrl: string;
        description: string;
    }
}

export function TechCard({ data: { id, logoUrl, description } }: TechCardProps) {

    return (
        <Flex key={id}
            h="100%"
            w="100%"
            p={5}
            bg="quinary"
            border="1px"
            borderColor="transparent"
            borderBottomColor="primary"
            rounded="md"
            gap={5}
        >
            <Flex flex="1" align="center" justify="center">
                <Img
                    src={logoUrl}
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