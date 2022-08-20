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
            <ProfilePicture
                pictureUrl='images/profile-picture.jpeg'
            >
                <Link href={githubUrl}>
                    <FloatingIcon
                        icon={FiGithub}
                        right="0"
                        top="-1rem"
                    />
                </Link>

                <Link href={linkedinUrl}>
                    <FloatingIcon
                        icon={FiLinkedin}
                        right="-4rem"
                        top="4rem"
                    />
                </Link>
            </ProfilePicture>
            <Flex align="center" justify="center" mt="1rem">
                <Icon as={FiMapPin} fontSize="2rem" />
                <Text fontSize="2xl" color="primary">{location}</Text>
            </Flex>
        </Box>
    )
}