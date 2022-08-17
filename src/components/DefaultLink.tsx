import { ChakraStyledOptions } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface DefaultLink extends ChakraStyledOptions {
    children: JSX.Element | JSX.Element[];
    url: string;
}

export function DefaultLink({ url, children, ...rest }: DefaultLink) {

    return (
        <Link href={url} passHref>
            <ChakraLink target="_blank" {...rest}>
                {children}
            </ChakraLink>
        </Link>
    )
}