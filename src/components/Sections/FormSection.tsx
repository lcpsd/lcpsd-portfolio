import { Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { Container } from "../Container";
import { DefaultField } from "../DefaultField";
import { DefaultTitle } from "../DefaultTitle";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Section } from "../CurrentSection";

export function FormSection() {

    // Yup
    const schema = yup.object().shape({
        name: yup.string().required('Informe seu nome'),
        whatsapp: yup.string().required('Informe seu whatsapp'),
        application: yup.string().required('Informe a a plicação'),
        summary: yup.string().required('Informe o resumo'),
        ref1: yup.string().required('Informe a referência'),
        ref2: yup.string().required('Informe a referência'),
        clientArea: yup.string().required('Informe seua área'),
        applicationInfo: yup.string().required('Informe o que deve haver na aplicação'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    async function handleSubmitForm(formData: FieldValues) {
        console.log(formData)
    }


    return (
        <Section id="form" w="100%" maxW="500px" alignItems="stretch" mx="auto" textAlign="center" zIndex="10" h="100%">

            <DefaultTitle title='Orçamento' />
            <Text mb="3rem">Sem compromisso</Text>

            <Flex
                as="form"
                direction="column"
                gap={2}
                onSubmit={handleSubmit(handleSubmitForm)}
                align="flex-start"
            >
                <DefaultField
                    registerName='name'
                    formRegister={register}
                    placeholder='Nome'
                />
                <Text className="error-message">{errors.name?.message?.toString()}</Text>

                <DefaultField
                    registerName='whatsapp'
                    formRegister={register}
                    placeholder='Whatsapp'
                />
                <Text className="error-message">{errors.whatsapp?.message?.toString()}</Text>

                <DefaultField
                    registerName='application'
                    formRegister={register}
                    placeholder='Aplicação (Landing Page, One Page, Dashboard)'
                />
                <Text className="error-message">{errors.application?.message?.toString()}</Text>

                <Textarea
                    {...register('summary')}
                    bg="quinary"
                    placeholder='Resuma sua ideia'
                    borderColor="quaternary"
                />
                <Text className="error-message">{errors.summary?.message?.toString()}</Text>

                <DefaultField
                    registerName='ref1'
                    formRegister={register}
                    placeholder='Referência 1'
                />
                <Text className="error-message">{errors.ref1?.message?.toString()}</Text>

                <DefaultField
                    registerName='ref2'
                    formRegister={register}
                    placeholder='Referência 1'
                />
                <Text className="error-message">{errors.ref2?.message?.toString()}</Text>

                <DefaultField
                    registerName='clientArea'
                    formRegister={register}
                    placeholder='Sua área de atuação'
                />
                <Text className="error-message">{errors.clientArea?.message?.toString()}</Text>

                <Textarea
                    {...register('applicationInfo')}
                    bg="quinary"
                    placeholder='Resuma sua ideia'
                    borderColor="quaternary"
                />
                <Text className="error-message">{errors.applicationInfo?.message?.toString()}</Text>

                <Button w="100%" bg="primary" colorScheme="teal" color="quinary" type="submit">Enviar</Button>
            </Flex>

            <Flex direction="column" mt="2rem" w="100%">
                <Text>Ou tire suas dúvidas pelo whatsapp</Text>
                <Button bg="tertiary" colorScheme="purple" color="white">Whatsapp</Button>
            </Flex>
        </Section>
    )
}