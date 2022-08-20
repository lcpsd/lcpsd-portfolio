import { Box, Flex, SimpleGrid, Text, Icon, Button } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { DefaultLink } from "./DefaultLink";
import { TechBadge } from "./TechBadge";
import { ProjectImage } from "./ProjectImage";
import { TechsButton } from "./TechsButton";

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
            mx="auto"
            h="100%"
            align="center"
            justify="center"
            direction={{ base: "column", md: "row" }}
        >
            <DefaultLink url={project.url} flex="1" h="100%" w="100%">
                <Flex align="center" position="relative" cursor="pointer" h={{ base: "300px", md: "100%" }} w="100%">

                    <ProjectImage
                        screenshotUrl={project.screenshots[0]}
                        top="-3rem"
                        right="0"
                        left="-7rem"
                        bottom="0"
                        boxShadow="0px 0px 10px 0px black"
                        zIndex="1"
                    />

                    <ProjectImage
                        screenshotUrl={project.screenshots[1]}
                        top="8rem"
                        right="1rem"
                        bottom="0"
                    />
                </Flex>
            </DefaultLink>

            <Flex flex="1"
                px={5}
                direction="column"
                gap={5}
                justify="center"
                align={{ base: "initial", md: "center" }}>
                <Box flex="1">
                    <Text color="primary" fontSize="2xl">{project.title}</Text>
                    <Text>{project.description}</Text>
                </Box>

                <Flex direction="column" flex="1" gap={5} justify="flex-start" w="100%" >
                    <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={5} display={{ base: "none", md: "grid" }} w="100%">
                        {
                            project.techs.map(tech => (
                                <TechBadge
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
                            w="100%"
                            border="1px"
                            borderColor="primary"
                        >Repositório <Icon as={FiGithub} /></Button>
                    </DefaultLink>

                    <Box flex="1">
                        <TechsButton techs={project.techs} />
                    </Box>

                </Flex>
            </Flex>
        </Flex>
    )
}