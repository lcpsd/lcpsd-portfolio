import { Box, ChakraStyledOptions, Flex } from "@chakra-ui/react";

interface VideoBgProps extends ChakraStyledOptions {
    source: string;
}

export function VideoBg({ source, ...rest }: VideoBgProps) {

    return (
        <Flex w='100vw' h='100vh' bg="quinary" justify='center' align='center' position="relative" {...rest}>
            <Box
                w='100%'
                h="100%"
                bgGradient='linear(to-t, quinary, transparent, transparent, transparent, transparent)'
                position="absolute"
                left="0"
                top="0"
                zIndex="1"
            />
            <video
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
                style={{
                    height: '100vh',
                    width: '100vw',
                    objectFit: 'cover',
                    mixBlendMode: "difference",
                    opacity: "0.2"
                }}
                id='video'>
                <source src={source} type='video/mp4' />
            </video>
        </Flex >
    )
}