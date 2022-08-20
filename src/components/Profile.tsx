import { Box, ChakraStyledOptions, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { FloatingIcon } from "./FloatingIcon";
import { ProfilePicture } from "./ProfilePicture";
import { DataStore } from '@aws-amplify/datastore';
import { Profile as ProfileModel } from '../models';
import { useEffect, useState } from "react";

export function Profile() {

    const [profileData, setProfileData] = useState<ProfileModel>()

    async function FetchUserProfile() {
        const data = await DataStore.query<ProfileModel>(ProfileModel)
        setProfileData(data[0])
    }

    useEffect(() => {
        FetchUserProfile()
    }, [])

    return (
        <Box>
            <ProfilePicture pictureUrl='images/profile-picture.jpeg' />

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