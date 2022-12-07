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
        <Flex direction="column" align="center">
            <ProfilePicture pictureUrl={profileData?.avatarUrl ?? ""} />

            <Flex justify="center" mt={2}>
                <Icon as={FiMapPin} fontSize="2rem" />
                <Text textAlign="center" fontSize="2xl" color="primary">{profileData?.location ?? ""}</Text>
            </Flex>
        </Flex>
    )
}