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
            bg="quaternary"
            h="70px"
            p={2}
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