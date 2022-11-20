import { Flex, Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Container } from "../Container";
import { Section } from "../CurrentSection";
import { DefaultCarousel } from "../DefaultCarousel";
import { DefaultTitle } from "../DefaultTitle";

export function CertificationSection() {

    const [certifications, setCertifications] = useState<any[]>([])

    async function fetchCertifications() {
        return
    }

    useEffect(() => {
        fetchCertifications()
    }, [])

    return (
        <Section id="certifications" h={{ base: "70vh", md: "100vh" }}>
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