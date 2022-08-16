import { ChakraStyledOptions, Flex } from "@chakra-ui/react";

interface VideoBgProps extends ChakraStyledOptions {
    source: string;
}

export function VideoBg({ source, ...rest }: VideoBgProps) {

    return (
        <Flex w='100%' h='calc(100vh - 40px)' justify='center' align='center' {...rest} objectFit='cover' opacity="0.1">
            <video
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
                style={{
                    height: 'auto',
                    width: '100%',
                    objectFit: 'cover',
                    mixBlendMode: "hard-light"
                }}
                id='video'>
                <source src={source} type='video/mp4' />
            </video>
        </Flex >
    )
}