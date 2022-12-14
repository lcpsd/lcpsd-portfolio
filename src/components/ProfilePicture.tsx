import { chakra, ChakraStyledOptions } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

interface ProfilePicture extends ChakraStyledOptions {
    pictureUrl: string;
}

export function ProfilePicture({ pictureUrl, ...rest }: ProfilePicture) {

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: isValidMotionProp,
    })

    const variants = {
        start: { boxShadow: "0px 0px 50px -20px #00FFD1" },
        finish: { boxShadow: "0px 0px 100px 0px #00FFD1" }
    }

    return (
        <ChakraBox
            bgImage={`${pictureUrl}`}
            bgSize={{ base: "350px", md: "325px", lg: "450px" }}
            bgRepeat="no-repeat"
            rounded="full"
            h={{ base: "300px", md: "300px", lg: "400px" }}
            w={{ base: "300px", md: "300px", lg: "400px" }}
            borderColor="primary !important"
            border="2px"
            position="relative"
            initial="start"
            animate="finish"
            variants={variants}
            // @ts-ignore
            transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: "Infinity",
                repeatType: "reverse",
            }}
            {...rest}
        >
        </ChakraBox>
    )
}