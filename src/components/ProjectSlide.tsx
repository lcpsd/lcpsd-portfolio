import { Box, Flex, SimpleGrid, Text, Icon, Button } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { DefaultLink } from "./DefaultLink";
import { ProjectBadge } from "./ProjectBadge";
import { ProjectImage } from "./ProjectImage";

interface TechProps {
    logo: string;
    title: string;
}

interface ProjectProps {
    id: string | number;
    title: string;
    description: string;
    url: string;
    techs: TechProps[];
    screenshots: string[];
}

interface ProjectSlideProps {
    project: ProjectProps;
}

export function ProjectSlide({ project }: ProjectSlideProps) {

    return (
        <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction={{ sm: "column", lg: "row" }}
        >
            <DefaultLink url={project.url} flex="2" h="100%" w="100%">
                <Flex align="center" position="relative" cursor="pointer" h={{ sm: "300px", lg: "100%" }} w="100%">

                    <ProjectImage
                        screenshotUrl={project.screenshots[0]}
                        top="-7rem"
                        right="0"
                        left="-10rem"
                        bottom="0"
                        boxShadow="0px 0px 10px 0px black"
                        zIndex="1"
                    />

                    <ProjectImage
                        screenshotUrl={project.screenshots[1]}
                        top="5rem"
                        right="2rem"
                        bottom="0"
                    />
                </Flex>
            </DefaultLink>

            <Flex flex="1" direction="column" gap={5} justify="center" h="100%">
                <Box>
                    <Text color="primary" fontSize="2xl">{project.title}</Text>
                    <Text>{project.description}</Text>
                </Box>

                <SimpleGrid columns={2} spacing={5}>
                    {
                        project.techs.map(tech => (
                            <ProjectBadge
                                logoUrl={tech.logo}
                                title={tech.title}
                                key={tech.title}
                            />
                        ))
                    }
                </SimpleGrid>

                <DefaultLink url={project.url}>
                    <Button
                        background="quinary"
                        color="white"
                        colorScheme="black"
                        gap={2}
                        marginBottom="4em"
                        w="100%"
                    >Repositório <Icon as={FiGithub} /></Button>
                </DefaultLink>
            </Flex>
        </Flex>
    )
}