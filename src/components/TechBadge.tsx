import { ChakraStyledOptions, Flex, Img, Text } from "@chakra-ui/react";

interface ProjectBadgeProps extends ChakraStyledOptions {
    logoUrl: string;
    title: string;
}

export function TechBadge({ title, logoUrl, ...rest }: ProjectBadgeProps) {

    return (
        <Flex
            align="center"
            h={{ base: "100%", md: "70px" }}
            p={2}
            bg="#161325"
            borderBottom="1px"
            borderColor="primary"
            {...rest}
        >
            <Img
                src={logoUrl}
                h="100%"
                w="auto"
                flex="1"
            />
            <Text flex="3" textAlign="center" fontSize={{ base: "3xl", md: "xl" }}>{title}</Text>
        </Flex>
    )
}