import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../../services/primisc";
import { TechProps } from "../../types/tech";
import { Section } from "../CurrentSection";
import { DefaultTitle } from "../DefaultTitle";
import { TechCard } from "../TechCard";

export function TechSection() {

    const [techData, setTechData] = useState<TechProps[]>()

    async function FetchTechs() {
        const projects = await client.getAllByType('techs')

        const sanitized = projects.map(project => {
            return {
                id: project.data.id,
                title: project.data.title,
                description: project.data.description,
                logoUrl: project.data.logourl.url,
                order: project.data.order
            }
        })

        setTechData(sanitized.sort((a, b) => a.order - b.order))
    }

    useEffect(() => {
        FetchTechs()
    }, [])

    return (
        <Section id="techs" h="100%">

            <DefaultTitle title='Tecnologias' />

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt="1rem">
                {
                    techData &&
                    techData.map(tech => (
                        <TechCard data={tech} key={`${tech.id}` + tech.logoUrl} />
                    ))
                }
            </SimpleGrid>
        </Section>
    )
}