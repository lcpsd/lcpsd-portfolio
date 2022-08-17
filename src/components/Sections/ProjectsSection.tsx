import { Box, Flex, Text } from "@chakra-ui/react";
import { BigLight } from "../BigLight";
import { ProjectsCarousel } from "../ProjectsCarousel";

export function ProjectsSection() {

    return (
        <Flex direction="column" h="100vh" align="center" py={10} position="relative" zIndex="10">

            <Text color="primary" fontSize="4xl">Projetos</Text>

            <ProjectsCarousel />

            <BigLight
                top="-70rem"
                m="auto"
            />

        </Flex>
    )
}