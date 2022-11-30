import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../../services/primisc";
import { ProjectProps } from "../../types/project";
import { Section } from "../CurrentSection";
import { DefaultTitle } from "../DefaultTitle";
import { ProjectCard } from "../ProjectCard";

export function ProjectsSection() {

    const [projectData, setProjectdata] = useState<any[]>()

    async function fetchProjects() {
        const projects = await client.getAllByType('projects')

        const sanitized: ProjectProps[] = projects.map(project => {
            return {
                id: project.data.id,
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
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="100%">
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