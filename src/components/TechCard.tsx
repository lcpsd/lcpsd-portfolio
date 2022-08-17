import { Flex, Img, Text } from "@chakra-ui/react";

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
            maxH="150px"
            w="100%"
            p={2}
            bg="quinary"
            border="1px"
            borderColor="transparent"
            borderRightColor="primary"
            borderTopColor="primary"
            rounded="md"
        >
            <Img
                src={logoUrl}
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
                <Text fontSize="0.8rem">{description}</Text>
            </Flex>
        </Flex>
    )
}