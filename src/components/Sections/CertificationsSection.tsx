import { Flex, Img } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import { Container } from "../Container";
import { DefaultCarousel } from "../DefaultCarousel";
import { DefaultTitle } from "../DefaultTitle";

export function CertificationSection() {

    const certifications = [
        {
            id: 1,
            imgLink: "https://i.imgur.com/dBJ3jUY.png"
        },
        {
            id: 2,
            imgLink: "https://i.imgur.com/dBJ3jUY.png"
        },
        {
            id: 3,
            imgLink: "https://i.imgur.com/dBJ3jUY.png"
        },
    ]

    return (
        <Container h={{ base: "70vh", lg: "100vh" }}>
            <DefaultTitle title="Certificações" />
            <DefaultCarousel>
                {
                    certifications.map(certification => (
                        <SwiperSlide key={certification.id}>
                            <Flex w="100%" h="100%" align="center" justify="center">
                                <Img
                                    src={certification.imgLink}
                                    h={{ base: "auto", lg: "80%" }}
                                    w={{ base: "100%", lg: "auto" }}
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
        </Container>
    )
}