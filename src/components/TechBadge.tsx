import { Flex, Img, Text } from "@chakra-ui/react";

interface ProjectBadgeProps {
    logoUrl: string;
    title: string;
}

export function ProjectBadge({ title, logoUrl, ...rest }: ProjectBadgeProps) {

    return (
        <Flex
            align="center"
            h="70px"
            p={2}
            bg="#161325"
            borderBottom="1px"
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