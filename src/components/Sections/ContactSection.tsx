import { Box, Button, Divider, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai"
import { Section } from "../CurrentSection";
import { DefaultTitle } from "../DefaultTitle";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { DefaultField } from "../../components/DefaultField"
import { SocialButton } from "../socialButton";
import { FiLinkedin } from "react-icons/fi";

export function ContactSection() {

    const schema = yup.object().shape({
        name: yup.string().required('Digite seu nome'),
        email: yup.string().required('Digite seu e-mail'),
        message: yup.string().required('Digite uma mensagem'),
    })

    const { register, formState: { errors }, getValues, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    async function sendEmail() {

    }

    return (
        <Flex align="center" direction="column">
            <DefaultTitle title="Contato" />
            <Section id="contact" direction="column" w="100%">
                <Flex justify="flex-start" gap={5} w="100%" maxW="700px">
                    <Flex gap={5}>
                        <SocialButton
                            icon={AiOutlineWhatsApp}
                            url="https://api.whatsapp.com/send?phone=5517996484654"
                            bg="primary"
                            color="black"
                        />
                        <SocialButton
                            icon={FiLinkedin}
                            url="https://www.linkedin.com/in/lcpsd"
                            bg="blue.500"
                            color="white"
                        />
                    </Flex>

                    <Divider orientation="vertical" />

                    <Flex direction="column" gap={5} flex="3">
                        <Box>
                            <Text size="sm">Nome</Text>
                            <DefaultField formRegister={register} registerName="name" />
                            {errors.name?.message && <Box className='error-message'>{errors.name?.message.toString()}</Box>}
                        </Box>

                        <Box>
                            <Text size="sm">E-mail</Text>
                            <DefaultField formRegister={register} registerName="email" />
                            {errors.email?.message && <Box className='error-message'>{errors.email?.message.toString()}</Box>}
                        </Box>

                        <Box>
                            <Text size="sm">Mensagem</Text>
                            <DefaultField formRegister={register} registerName="message" as="textarea" h="200px" />
                            {errors.message?.message && <Box className='error-message'>{errors.message?.message.toString()}</Box>}
                        </Box>

                        <Button
                            onClick={() => handleSubmit(sendEmail)}
                            bg="primary"
                            color="black"
                            _hover={{
                                opacity: 0.8
                            }}
                        >Enviar</Button>
                    </Flex>
                </Flex>
            </Section >
        </Flex>
    )
}