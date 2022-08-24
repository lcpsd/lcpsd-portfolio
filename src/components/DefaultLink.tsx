import { ChakraStyledOptions } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface DefaultLink extends ChakraStyledOptions {
    children: JSX.Element | JSX.Element[];
    url: string;
}

export function DefaultLink({ url, children, ...rest }: DefaultLink) {

    return (
        <Link href={url} passHref style={{ width: "100%" }}>
            <ChakraLink target="_blank" {...rest} w="100%">
                {children}
            </ChakraLink>
        </Link>
    )
}