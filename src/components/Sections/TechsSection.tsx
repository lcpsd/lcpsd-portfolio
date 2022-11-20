import { SimpleGrid } from "@chakra-ui/react";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { Section } from "../CurrentSection";
import { DefaultTitle } from "../DefaultTitle";
import { TechCard } from "../TechCard";

export function TechSection() {

    const [techData, setTechData] = useState()

    async function FetchTechs() {
        return
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
                        <TechCard data={tech} key={tech.id + tech.logoUrl} />
                    ))
                }
            </SimpleGrid>
        </Section>
    )
}