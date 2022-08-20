import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { Header } from "../Header";
import { HeaderTitle } from "../HeaderTitle";
import { Profile } from "../Profile";
import { VideoBg } from "../videoBg";

export function HeaderSection() {

    return (
        <Box>
            <Header />

            <Flex height="100vh" direction={{ sm: "column", md: "row" }}>
                <HeaderTitle flex="1" />

                <Flex
                    flex={{ sm: "2", md: "1" }}
                    direction="column"
                    align="center"
                    justify="center"
                    gap={10}
                    position="relative">
                    <Profile
                        profileUrl='images/profile-picture.jpeg'
                        githubUrl="https://github.com/lcpsd"
                        linkedinUrl="https://www.linkedin.com/in/lcpsd/"
                        location='Campo Grande - MS'
                    />

                    <Flex
                        transform="rotate(90deg)"
                        position="absolute"
                        right={{ sm: "-2rem", md: "1rem" }}
                        bottom="3rem"
                        zIndex="100"
                        align="center"
                        justify="center"
                        opacity="0.5"
                    >
                        <Text fontSize="1.5rem">Role</Text>
                        <Icon as={IoIosArrowForward} fontSize="3xl" />
                    </Flex>
                </Flex>
            </Flex>

            <Flex
                position="absolute"
                h="100vh"
                w='100vw'
                left="0"
                top="0"
                zIndex="-10"
                bg="quinary"
            >
                <VideoBg source='https://i.imgur.com/HoH9j5S.mp4' />
            </Flex>
        </Box>
    )
}