import { Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from 'yup';
import { maskPhone } from "../../utils/maskPhone";
import { Section } from "../CurrentSection";
import { DefaultField } from "../default/DefaultField";
import { DefaultLink } from "../default/DefaultLink";
import { DefaultTitle } from "../default/DefaultTitle";

export function FormSection() {

    const [profileData, setProfileData] = useState<any>()

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
        return
    }


    async function FetchUserProfile() {
        return
    }

    useEffect(() => {
        FetchUserProfile()
    }, [])


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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.target.value = maskPhone(e.target.value)
                    }}
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
                    type="url"
                />
                <Text className="error-message">{errors.ref1?.message?.toString()}</Text>

                <DefaultField
                    registerName='ref2'
                    formRegister={register}
                    placeholder='Referência 2'
                    type="url"
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
                <DefaultLink url={`https://api.whatsapp.com/send?phone=${profileData?.whatsapp}`}>
                    <Button bg="tertiary" colorScheme="purple" color="white" w="100%">Whatsapp</Button>
                </DefaultLink>
            </Flex>
        </Section>
    )
}