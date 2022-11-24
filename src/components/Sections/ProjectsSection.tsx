import { Box, Button, Flex, Icon, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { DataStore } from "aws-amplify";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { client } from "../../services/primisc";
import { Section } from "../CurrentSection";
import { DefaultLink } from "../DefaultLink";
import { DefaultTitle } from "../DefaultTitle";
import { ProjectCard } from "../ProjectCard";

export function ProjectsSection() {

    const [projectData, setProjectdata] = useState<any[]>()

    async function fetchProjects() {
        const projects = await client.getAllByType('projects')

        const sanitized = projects.map(project => {
            return {
                title: project.data.title,
                description: project.data.description,
                screenshot: project.data.screenshot.url,
                order: project.data.order,
                url: project.data.url.url
            }
        })

        setProjectdata(sanitized)
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <Section minH="100vh" h="100%" id="projects" gap={10}>
            <DefaultTitle title="Projetos" lineHeight="0" />
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                {
                    projectData &&
                    projectData.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))
                }
            </SimpleGrid>
        </Section>
    )
}