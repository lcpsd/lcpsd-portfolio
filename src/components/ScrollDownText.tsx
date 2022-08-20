import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export function ScrollDownText() {

    return (
        <Flex
            transform="rotate(90deg)"
            position="absolute"
            right="0"
            zIndex="100"
            align="center"
            justify="center"
            opacity="0.3"
            color="primary"
        >
            <Text fontSize="1.5rem">Role</Text>
            <Icon as={IoIosArrowForward} fontSize="3xl" />
        </Flex>
    )
}