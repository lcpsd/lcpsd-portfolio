import { Flex, Img, Text } from "@chakra-ui/react";

interface ProjectBadgeProps {
    logoUrl: string;
    title: string;
}

export function ProjectBadge({ title, logoUrl, ...rest }: ProjectBadgeProps) {

    return (
        <Flex
            align="center"
            rounded="md"
            h="70px"
            p={2}
            bg="quinary"
            borderRight="1px"
            borderColor="primary"
            {...rest}
        >
            <Img
                src={logoUrl}
                h="50px"
                w="auto"
                flex="1"
            />
            <Text flex="3" textAlign="center" fontSize="xl">{title}</Text>
        </Flex>
    )
}