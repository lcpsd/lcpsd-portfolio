import { ChakraStyledOptions, Flex, Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SocialButtonProps extends ChakraStyledOptions {
    url: string;
    icon: IconType;
}

export function SocialButton({ url, icon, ...rest }: SocialButtonProps) {

    return (
        <Flex
            as={Link}
            href={url}
            cursor="pointer"
            align="center"
            justify="center"
            gap={2}
            p={5}
            rounded="md"
            flex="1"
            target="_blank"
            transition="all 0.2"
            _hover={{
                opacity: 0.8
            }}
            {...rest}
        >
            <Icon as={icon} fontSize="50px" />
        </Flex>
    )
}