import { Box, Button, Divider, Flex, Spinner, Text } from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai"
import { Section } from "../CurrentSection";
import { DefaultTitle } from "../DefaultTitle";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { DefaultField } from "../../components/DefaultField"
import { FiLinkedin } from "react-icons/fi";
import { SocialButton } from "../SocialButton";
import axios from "axios";
import { api } from "../../services/axios";
import { toast, ToastContainer } from "react-toastify";
import { notify } from "../../utils/notify";
import { useState } from "react";

export function ContactSection() {

    const [loading, setLoading] = useState(false)

    const schema = yup.object().shape({
        name: yup.string().required('Digite seu nome'),
        email: yup.string().required('Digite seu e-mail'),
        message: yup.string().required('Digite uma mensagem'),
    })

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    async function sendEmail(data: FieldValues) {
        setLoading(true)
        const res = await api.post("/mail", data)
        res.status == 200 && notify("E-mail enviado com sucesso")
        res.status == 500 && notify("Ocorreu um erro")
        setLoading(false)
    }

    return (
        <Flex align="center" direction="column">
            <DefaultTitle title="Contato" />
            <Section id="contact" direction="column" w="100%">
                <Flex justify="flex-start" direction={{ base: "column", lg: "row" }} gap={5} w="100%" maxW="700px">
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

                    <Flex as="form" direction="column" gap={5} flex="3" onSubmit={handleSubmit(sendEmail)}>
                        <Box>
                            <Text fontSize="lg">Nome</Text>
                            <DefaultField formRegister={register} registerName="name" />
                            {errors.name?.message && <Box className='error-message' color="red.700">{errors.name?.message.toString()}</Box>}
                        </Box>

                        <Box>
                            <Text fontSize="lg">E-mail</Text>
                            <DefaultField formRegister={register} registerName="email" />
                            {errors.email?.message && <Box className='error-message' color="red.700">{errors.email?.message.toString()}</Box>}
                        </Box>

                        <Box>
                            <Text fontSize="lg">Mensagem</Text>
                            <DefaultField formRegister={register} registerName="message" as="textarea" h="200px" />
                            {errors.message?.message && <Box className='error-message' color="red.700">{errors.message?.message.toString()}</Box>}
                        </Box>

                        <Button
                            type="submit"
                            bg="primary"
                            color="black"
                            _hover={{
                                opacity: 0.8
                            }}
                        >
                            {
                                !loading ? "Enviar" : <Spinner color="black" />
                            }
                        </Button>
                    </Flex>
                </Flex>
                <ToastContainer />
            </Section >
        </Flex>
    )
}