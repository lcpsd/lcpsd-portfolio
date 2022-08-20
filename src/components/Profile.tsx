import { Box, ChakraStyledOptions, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { FloatingIcon } from "./FloatingIcon";
import { ProfilePicture } from "./ProfilePicture";

interface ProfileProps extends ChakraStyledOptions {
    profileUrl: string;
    linkedinUrl: string;
    githubUrl: string;
    location: string;
}

export function Profile({ pictureUrl, linkedinUrl, githubUrl, location, ...rest }: ProfileProps) {

    return (
        <Box>
            <ProfilePicture pictureUrl='images/profile-picture.jpeg' />

            <Flex w="100%" justify="center" py={5} gap={5}>
                <Link href={githubUrl}>
                    <FloatingIcon icon={FiGithub} />
                </Link>

                <Link href={linkedinUrl}>
                    <FloatingIcon icon={FiLinkedin} />
                </Link>
            </Flex>

            <Flex align="center" justify="center">
                <Icon as={FiMapPin} fontSize="2rem" />
                <Text fontSize="2xl" color="primary">{location}</Text>
            </Flex>
        </Box>
    )
}