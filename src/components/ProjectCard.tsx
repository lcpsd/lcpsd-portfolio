import { Button, Flex, Icon, Img, Text } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { ProjectProps } from "../types/project";
import { DefaultLink } from "./DefaultLink";

export function ProjectCard({ project }: ProjectProps) {

    return (
        <Flex direction="column" minH="300px" p={5} border="1px" borderColor="quaternary" rounded="md" gap={5}>
            <Flex align="center" flex="1">
                <Img
                    src={project.screenshot ?? ""}
                    rounded="xl"
                />
            </Flex>
            <Flex flex="1" direction="column">
                <Text fontWeight="bold" color="primary" fontSize="xl">
                    {project.title}
                </Text>
                <Text>
                    {project.description}
                </Text>
            </Flex>
            <DefaultLink url={project.url ?? ""}>
                <Button color="white" w="100%" border="1px" borderColor="quaternary">
                    Repositório <Icon as={FiGithub} />
                </Button>
            </DefaultLink>
        </Flex>
    )
}