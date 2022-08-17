import { ChakraStyledOptions, Flex } from "@chakra-ui/react";

interface VideoBgProps extends ChakraStyledOptions {
    source: string;
}

export function VideoBg({ source, ...rest }: VideoBgProps) {

    return (
        <Flex w='100vw' h='100vh' bg="quinary" justify='center' align='center' opacity="1" {...rest}>
            <video
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
                style={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'cover',
                    mixBlendMode: "hard-light",
                    opacity: "0.5"
                }}
                id='video'>
                <source src={source} type='video/mp4' />
            </video>
        </Flex >
    )
}