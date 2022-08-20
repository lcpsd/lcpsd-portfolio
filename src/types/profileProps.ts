import { ChakraStyledOptions } from "@chakra-ui/react";

export interface ProfileProps extends ChakraStyledOptions {
    avatarUrl: string;
    linkedin: string;
    github: string;
    whatsapp: string;
    location: string;
}