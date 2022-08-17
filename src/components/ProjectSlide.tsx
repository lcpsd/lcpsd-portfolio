import { Box, Flex, SimpleGrid, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { DefaultLink } from "./DefaultLink";
import { ProjectBadge } from "./ProjectBadge";
import { ProjectImage } from "./ProjectImage";

interface TechProps {
    logo: string;
    title: string;
}

interface ProjectProps {
    id: string | number;
    title: string;
    description: string;
    url: string;
    techs: TechProps[];
    screenshots: string[];
}

interface ProjectSlideProps {
    project: ProjectProps;
}

export function ProjectSlide({ project }: ProjectSlideProps) {

    return (
        <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
        >
            <DefaultLink url={project.url} flex="2">
                <Flex align="center" position="relative" cursor="pointer">

                    <ProjectImage
                        screenshotUrl={project.screenshots[0]}
                        top="-5rem"
                        right="0"
                        left="-1rem"
                        bottom="0"
                        boxShadow="0px 0px 10px 0px black"
                        zIndex="1"
                    />

                    <ProjectImage
                        screenshotUrl={project.screenshots[1]}
                        top="5rem"
                        right="2rem"
                        bottom="0"
                    />
                </Flex>
            </DefaultLink>

            <Flex flex="1" direction="column" gap={10} justify="center">
                <Box>
                    <Text color="primary" fontSize="2xl">{project.title}</Text>
                    <Text>{project.description}</Text>
                </Box>

                <SimpleGrid columns={2} spacing={5}>
                    {
                        project.techs.map(tech => (
                            <ProjectBadge
                                logoUrl={tech.logo}
                                title={tech.title}
                                key={tech.title}
                            />
                        ))
                    }
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}