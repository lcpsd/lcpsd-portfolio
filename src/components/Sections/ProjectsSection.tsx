import { Box, Flex, Text } from "@chakra-ui/react";
import { BigLight } from "../BigLight";
import { Container } from "../Container";
import { DefaultTitle } from "../DefaultTitle";
import { ProjectsCarousel } from "../ProjectsCarousel";

export function ProjectsSection() {

    return (
        <Container position="relative">

            <DefaultTitle title="Projetos" />

            <ProjectsCarousel />

            <BigLight
                top="-70rem"
                m="auto"
            />

        </Container>
    )
}