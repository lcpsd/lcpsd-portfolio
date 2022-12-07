import { Flex } from "@chakra-ui/react";
import { Section } from "../CurrentSection";
import { HeaderTitle } from "../HeaderTitle";
import { Profile } from "../Profile";
import { VideoBg } from "../videoBg";

export function HeaderSection() {

    return (
        <Section id="header">
            <Flex h="100vh" direction={{ base: "column", md: "row" }} w="100%" pt={{ md: "5rem" }}>
                <HeaderTitle flex="1" />

                <Flex
                    flex={{ base: "2.5", md: "1" }}
                    direction="column"
                    align="center"
                    justify={{ base: "flex-start", md: "center" }}
                    gap={10}
                    position="relative">
                    <Profile />
                </Flex>
            </Flex>

            <Flex
                position="absolute"
                h="100vh"
                w='100vw'
                left="0"
                top="0"
                zIndex="-10"
            >
                <VideoBg source='https://i.imgur.com/HoH9j5S.mp4' />
            </Flex>
        </Section>
    )
}