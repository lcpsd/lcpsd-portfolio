import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectImage } from "./ProjectImage";

export function ProjectsSlide() {

    const projects = [
        {
            id: 1,
            title: "Nome Projeto",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum enim rem, qui illo quisquam sequi suscipit, vero veniam eius, iste excepturi at harum quaerat accusamus officiis a voluptatum sint.",
            techs: [
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                },
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                },
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                }
            ],
            screenshots: [
                "https://i.imgur.com/hhQnIUl.png",
                "https://i.imgur.com/hhQnIUl.png"
            ]
        },

        {
            id: 2,
            title: "Nome Projeto",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum enim rem, qui illo quisquam sequi suscipit, vero veniam eius, iste excepturi at harum quaerat accusamus officiis a voluptatum sint.",
            techs: [
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                },
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                },
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                }
            ],
            screenshots: [
                "https://i.imgur.com/hhQnIUl.png",
                "https://i.imgur.com/hhQnIUl.png"
            ]
        }
    ]

    return (
        <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={20}
            style={{
                width: "100%",
                height: "100%"
            }}
        >
            {
                projects.map(project => (
                    <SwiperSlide
                        key={project.id}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Flex
                            w="100%"
                            h="100%"
                            align="center"
                            justify="center"
                        >
                            <Flex flex="2" align="center" position="relative">

                                <ProjectImage
                                    screenshotLink={project.screenshots[0]}
                                    top="-5rem"
                                    right="0"
                                    left="-1rem"
                                    bottom="0"
                                    boxShadow="0px 0px 10px 0px black"
                                    zIndex="1"
                                />

                                <ProjectImage
                                    screenshotLink={project.screenshots[1]}
                                    top="5rem"
                                    right="2rem"
                                    bottom="0"
                                />
                            </Flex>

                            <Flex flex="1" direction="column" gap={10} justify="center">
                                <Box>
                                    <Text color="primary" fontSize="3xl">{project.title}</Text>
                                    <Text>{project.description}</Text>
                                </Box>

                                <SimpleGrid columns={2} spacing={5}>
                                    {
                                        project.techs.map(tech => (
                                            <Flex
                                                align="center"
                                                rounded="md"
                                                bg="quaternary"
                                                h="70px"
                                                p={2}
                                            >
                                                <Img
                                                    src={tech.logo}
                                                    h="50px"
                                                    w="auto"
                                                    flex="1"
                                                />
                                                <Text flex="3" textAlign="center" fontSize="xl">{tech.title}</Text>
                                            </Flex>
                                        ))
                                    }
                                </SimpleGrid>
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}