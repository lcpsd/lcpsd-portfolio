import { Box, Button, Flex, Icon, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { DataStore } from "aws-amplify";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { Project } from "../../models";
import { Section } from "../CurrentSection";
import { DefaultLink } from "../DefaultLink";
import { DefaultTitle } from "../DefaultTitle";

export function ProjectsSection() {

    const [projectData, setProjectdata] = useState<Project[]>()

    async function fetchTechs() {
        const data = await DataStore.query<Project>(Project)

        setProjectdata(data)
    }

    useEffect(() => {
        fetchTechs()
    }, [])

    return (
        <Section minH="100vh" id="projects" gap={10}>
            <DefaultTitle title="Projetos" lineHeight="0" />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                {
                    projectData &&
                    projectData.map(project => (
                        <Flex direction="column" minH="300px" p={5} border="1px" borderColor="quaternary" rounded="md" gap={5}>
                            <Flex align="center" flex="1">
                                <Img
                                    src={project.screenshot ?? ""}
                                    rounded="md"
                                />
                            </Flex>
                            <Flex flex="1" direction="column">
                                <Text fontWeight="bold" color="primary" fontSize="xl">
                                    {project.title}
                                </Text>
                                <Text>
                                    {project.description}
                                </Text>
                            </Flex>
                            <DefaultLink url={project.url ?? ""}>
                                <Button colorScheme="black" w="100%" border="1px" borderColor="quaternary">
                                    Repositório <Icon as={FiGithub} />
                                </Button>
                            </DefaultLink>
                        </Flex>
                    ))
                }
            </SimpleGrid>
        </Section>
    )
}