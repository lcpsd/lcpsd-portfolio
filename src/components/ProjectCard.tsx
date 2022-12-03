import { Box, Flex, Text } from "@chakra-ui/react";
import { ProjectProps } from "../types/project";
import { DefaultLink } from "./default/DefaultLink";

interface ProjectCardProps {
    project: ProjectProps;
}

export function ProjectCard({ project }: ProjectCardProps) {

    return (
        <Flex
            direction="column"
            minH="400px"
            w="100%"
            border="1px"
            borderColor="quaternary"
            rounded="md"
            gap={5}
            position="relative"
            bgImg={project.screenshot}
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            as={DefaultLink}
            url={project.url}
        >
            <Box
                w="100%"
                h="100%"
                opacity={{ base: "1", md: "0.2" }}
                transition="all 0.2s"
                _hover={{
                    opacity: "1"
                }}
                cursor="pointer"
            >
                <Flex
                    flex="1"
                    direction="column"
                    p={5}
                    position="absolute"
                    bottom="0"
                    zIndex="10"
                >
                    <Text fontWeight="bold" color="primary" fontSize="xl">
                        {project.title}
                    </Text>
                    <Text>
                        {project.description}
                    </Text>

                </Flex>
                <Box
                    position="absolute"
                    w="100%"
                    h="100%"
                    top="0"
                    left="0"
                    bgGradient="linear-gradient(to-t, quinary, transparent)"
                    rounded="md"
                />
            </Box>
        </Flex>
    )
}