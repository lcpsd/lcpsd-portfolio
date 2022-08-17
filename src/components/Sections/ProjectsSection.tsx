import { Box, Flex, Text } from "@chakra-ui/react";
import { BigLight } from "../BigLight";
import { DefaultTitle } from "../DefaultTitle";
import { ProjectsCarousel } from "../ProjectsCarousel";

export function ProjectsSection() {

    return (
        <Flex direction="column" h="100vh" align="center" py={10} position="relative" zIndex="10">

            <DefaultTitle title="Projetos" />

            <ProjectsCarousel />

            <BigLight
                top="-70rem"
                m="auto"
            />

        </Flex>
    )
}