import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { FloatingIcon } from "./FloatingIcon";
import { ProfilePicture } from "./ProfilePicture";
import { useEffect, useState } from "react";
import { client } from "../services/primisc";

export function Profile() {

    const [profileData, setProfileData] = useState<any>()

    async function FetchUserProfile() {
        const { data } = await client.getSingle('profile')
        const sanitized = {
            name: data.name,
            whatsapp: data.whatsapp,
            location: data.location,
            avatarUrl: data.avatarurl.url,
            github: data.github.url,
            linkedIn: data.linkedin.url
        }
        setProfileData(sanitized)
    }

    useEffect(() => {
        FetchUserProfile()
    }, [])

    return (
        <Box>
            <ProfilePicture pictureUrl={profileData?.avatarUrl ?? ""} />

            <Flex w="100%" justify="center" py={5} gap={5}>
                <Link href={profileData?.github ?? ""}>
                    <FloatingIcon icon={FiGithub} />
                </Link>

                <Link href={profileData?.linkedIn ?? ""}>
                    <FloatingIcon icon={FiLinkedin} />
                </Link>
            </Flex>

            <Flex align="center" justify="center">
                <Icon as={FiMapPin} fontSize="2rem" />
                <Text fontSize="2xl" color="primary">{profileData?.location ?? ""}</Text>
            </Flex>
        </Box>
    )
}