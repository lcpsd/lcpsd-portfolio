import { Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { BigLight } from "../BigLight";
import { Container } from "../Container";
import { Section } from "../CurrentSection";
import { DefaultTitle } from "../DefaultTitle";
import { TechCard } from "../TechCard";

export function TechSection() {

    const techs = [
        {
            id: 1,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 2,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 3,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 4,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 5,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 6,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 7,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 8,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 9,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 10,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 11,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
        {
            id: 12,
            logoUrl: "https://i.imgur.com/eCD0M12.png",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente ex itaque, deserunt cupiditate obcaecati esse, dicta ducimus dolor reprehenderit adipisci animi"
        },
    ]

    return (
        <Section id="techs" h="100%">

            <DefaultTitle title='Tecnologias' />

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt="1rem">
                {
                    techs.map(tech => (
                        <TechCard data={tech} key={tech.id + tech.logoUrl} />
                    ))
                }
            </SimpleGrid>
        </Section>
    )
}