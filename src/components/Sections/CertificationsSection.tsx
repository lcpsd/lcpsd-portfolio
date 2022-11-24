import { Flex, Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { client } from "../../services/primisc";
import { Section } from "../CurrentSection";
import { DefaultCarousel } from "../DefaultCarousel";
import { DefaultTitle } from "../DefaultTitle";

interface CertificationProps {
    id: number;
    imageUrl: string;
    title: string;
    order: number;
}

export function CertificationSection() {

    const [certifications, setCertifications] = useState<CertificationProps[]>([])

    async function fetchCertifications() {
        const projects = await client.getAllByType('certifications')

        const sanitized = projects.map(project => {
            return {
                id: project.data.id,
                imageUrl: project.data.imageurl.url,
                title: project.data.title,
                order: project.data.order
            }
        })

        setCertifications(sanitized.sort((a, b) => a.order - b.order))
    }

    useEffect(() => {
        fetchCertifications()
    }, [])

    return (
        <Section id="certifications" h="100vh">
            <DefaultTitle title="Certificações" />
            <DefaultCarousel>
                {
                    certifications &&
                    certifications.map(certification => (
                        <SwiperSlide key={certification.id}>
                            <Flex w="100%" h="100%" align="center" justify="center">
                                <Img
                                    src={certification.imageUrl ?? ""}
                                    h={{ base: "auto", md: "80%" }}
                                    w={{ base: "100%", md: "auto" }}
                                    bgPos="center"
                                    bgSize="cover"
                                    borderRadius="xl"
                                    border="1px"
                                    borderColor="transparent"
                                    borderRightColor="primary"
                                    borderTopColor="primary"
                                />
                            </Flex>
                        </SwiperSlide>
                    ))
                }
            </DefaultCarousel>
        </Section>
    )
}