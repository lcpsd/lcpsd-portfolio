import { Flex, Text } from "@chakra-ui/react";
import { ActiveLink } from "./ActiveLink";

export function MenuLinks() {

    return (
        <Flex w="100%" fontSize={{ base: "3xl", md: "xl" }} gap={{ base: 20, md: 10, lg: 20 }} direction={{ base: "column", md: "row" }} justify="center" align="center">
            <Text fontWeight="semibold" mr={{ base: "initial", md: "auto" }} color="primary" >Lucas Cardoso</Text>

            <ActiveLink
                href='#projects'
            >
                <Text>Projetos</Text>
            </ActiveLink>

            <ActiveLink
                href='#techs'
            >
                <Text>Tecnologias</Text>
            </ActiveLink>

            <ActiveLink
                href="#certifications"
            >
                <Text>Certificações</Text>
            </ActiveLink>

            <ActiveLink
                href='#contact'
            >
                <Text>Contato</Text>
            </ActiveLink>
        </Flex>
    )
}