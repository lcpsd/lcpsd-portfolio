import { Box, Divider, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai"
import { Section } from "../CurrentSection";
import { DefaultTitle } from "../DefaultTitle";

export function ContactSection() {
    return (
        <Flex align="center" direction="column">
            <DefaultTitle title="Contato" />
            <Section id="contact" direction="column">
                <Flex justify="flex-start" direction="column" gap={5}>
                    <Flex as={Link} href="https://api.whatsapp.com/send?phone=5517996484654" cursor="pointer" align="center" justify="center" gap={2} bg="primary" p={5} rounded="md" color="black">
                        <Icon as={AiOutlineWhatsApp} fontSize="50px" />
                        <Text fontSize="25px">&#40;17&#41;99648-4765</Text>
                    </Flex>
                    <Divider />
                    <Flex as={Link} href="mailto:lucascardosopsd@gmail.com" align="center" gap={2} justify="center" bg="tertiary" p={5} rounded="md">
                        <Icon as={AiOutlineMail} fontSize="50px" />
                        <Text fontSize="25px">lucascardosopsd@gmail.com</Text>
                    </Flex>
                </Flex>
            </Section >
        </Flex>
    )
}