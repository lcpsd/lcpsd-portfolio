import { Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Container } from "../Container";
import { DefaultField } from "../DefaultField";
import { DefaultTitle } from "../DefaultTitle";

export function FormSection() {

    const { register, handleSubmit } = useForm()

    async function handleSubmitForm() {

    }

    return (
        <Container w="100%" maxW="500px" alignItems="stretch" mx="auto" textAlign="center" zIndex="10">

            <DefaultTitle title='Orçamento' />
            <Text mb="3rem">Sem compromisso</Text>

            <Flex
                as="form"
                direction="column"
                gap={5}
                onSubmit={handleSubmit(handleSubmitForm)}>
                <DefaultField
                    registerName='name'
                    formRegister={register}
                    placeholder='Nome'
                />

                <DefaultField
                    registerName='whatsapp'
                    formRegister={register}
                    placeholder='Whatsapp'
                />

                <DefaultField
                    registerName='aplication'
                    formRegister={register}
                    placeholder='Aplicação (Landing Page, One Page, Dashboard)'
                />

                <Textarea
                    {...register('summary')}
                    bg="quinary"
                    placeholder='Resuma sua ideia'
                    borderColor="quaternary"
                />

                <DefaultField
                    registerName='ref1'
                    formRegister={register}
                    placeholder='Referência 1'
                />

                <DefaultField
                    registerName='ref2'
                    formRegister={register}
                    placeholder='Referência 1'
                />

                <DefaultField
                    registerName='clientArea'
                    formRegister={register}
                    placeholder='Sua área de atuação'
                />

                <Textarea
                    {...register('applicationInfo')}
                    bg="quinary"
                    placeholder='Resuma sua ideia'
                    borderColor="quaternary"
                />

                <Button bg="primary" colorScheme="teal" color="quinary">Enviar</Button>
            </Flex>

            <Flex direction="column" mt="2rem" w="100%">
                <Text>Ou tire suas dúvidas pelo whatsapp</Text>
                <Button bg="tertiary" colorScheme="purple" color="white" >Whatsapp</Button>
            </Flex>
        </Container>
    )
}