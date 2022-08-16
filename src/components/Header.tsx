import { Flex, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FiRepeat } from "react-icons/fi";

export function Header() {

    return (
        <Flex justify="space-between" align="center" h="80px" w="100%" py={10}>

            <Text color="primary" fontSize="2xl" textTransform="uppercase" fontWeight="semibold">Lucas Cardoso</Text>

            <Link href="#" passHref>
                <ChakraLink fontSize="xl" textTransform="uppercase">Projetos</ChakraLink>
            </Link>

            <Link href="#" passHref>
                <ChakraLink fontSize="xl" textTransform="uppercase">Tecnologias</ChakraLink>
            </Link>

            <Link href="#" passHref>
                <ChakraLink fontSize="xl" textTransform="uppercase">Certificações</ChakraLink>
            </Link>

            <Link href="#" passHref>
                <ChakraLink fontSize="xl" textTransform="uppercase">Contato</ChakraLink>
            </Link>

            <Link href="#" passHref>
                <ChakraLink fontSize="xl" textTransform="uppercase">| PT-BR <Icon fontSize="sm" as={FiRepeat} /></ChakraLink>
            </Link>
        </Flex>
    )
}