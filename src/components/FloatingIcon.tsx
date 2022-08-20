import { ChakraStyledOptions, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface FloatingIconProps extends ChakraStyledOptions {
    icon: IconType;
}

export function FloatingIcon({ icon, ...rest }: FloatingIconProps) {

    return (
        <Flex
            align="center"
            justify="center"
            bg="quinary"
            color="primary"
            border="1px"
            borderColor="primary"
            rounded="full"
            h="50px"
            w="50px"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{
                background: "primary",
                color: "quinary"
            }}
            {...rest}
        >
            <Icon as={icon} fontSize="2rem" />
        </Flex>
    )
}