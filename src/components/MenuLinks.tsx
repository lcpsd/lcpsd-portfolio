import { Flex, Text } from "@chakra-ui/react";
import { ActiveLink } from "./ActiveLink";
import { DefaultLink } from "./DefaultLink";

export function MenuLinks() {

    return (
        <Flex w="100%" fontSize={{ base: "3xl", md: "xl" }} gap={20} direction={{ base: "column", md: "row" }} justify="center" align="center">
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
                href="certifications"
            >
                <Text>Certificações</Text>
            </ActiveLink>

            <ActiveLink
                href='#form'
            >
                <Text>Contato</Text>
            </ActiveLink>
        </Flex>
    )
}