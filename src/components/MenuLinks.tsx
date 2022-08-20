import { Flex, Text } from "@chakra-ui/react";
import { DefaultLink } from "./DefaultLink";

export function MenuLinks() {

    return (
        <Flex fontSize={{ base: "3xl", md: "xl" }} gap={20} direction={{ base: "column", lg: "row" }} justify="center" align="center">
            <Text fontWeight="semibold" color="primary" mr="auto">Lucas Cardoso</Text>

            <DefaultLink
                target="_self"
                url='#projects'
            >
                <Text>Projetos</Text>
            </DefaultLink>

            <DefaultLink
                target="_self"
                url='#techs'
            >
                <Text>Tecnologias</Text>
            </DefaultLink>

            <DefaultLink
                target="_self"
                url='#certifications'
            >
                <Text>Certificações</Text>
            </DefaultLink>

            <DefaultLink
                target="_self"
                url='#contact'
            >
                <Text>Contato</Text>
            </DefaultLink>
        </Flex>
    )
}