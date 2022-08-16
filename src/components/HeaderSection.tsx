import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { Header } from "./Header";
import { HeaderTitle } from "./HeaderTitle";
import { Profile } from "./Profile";
import { VideoBg } from "./videoBg";

export function HeaderSection() {

    return (
        <>
            <Header />

            <Flex height="calc(100vh - 80px)">
                <HeaderTitle />

                <Flex flex="1" direction="column" align="center" justify="center" gap={10}>
                    <Profile
                        profileUrl='images/profile-picture.jpeg'
                        githubUrl="https://github.com/lcpsd"
                        linkedinUrl="https://www.linkedin.com/in/lcpsd/"
                        location='Campo Grande - MS'
                    />
                </Flex>
            </Flex>

            <Flex
                transform="rotate(90deg)"
                position="absolute"
                right="1rem"
                bottom="3rem"
                zIndex="100"
                align="center"
                justify="center"
                opacity="0.5"
            >
                <Text fontSize="1.5rem">Role</Text>
                <Icon as={IoIosArrowForward} fontSize="3xl" />
            </Flex>

            <Flex
                position="absolute"
                h="100%"
                w='100vw'
                left="0"
                top="0"
                zIndex="-1"
            >
                <VideoBg source='https://i.imgur.com/HoH9j5S.mp4' opacity={{ base: '0.5', xl: '1' }} objectFit='cover' />
            </Flex>
        </>
    )
}