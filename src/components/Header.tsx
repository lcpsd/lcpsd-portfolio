import { Box, Flex, Icon, Img, Text } from '@chakra-ui/react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useMenuContext } from '../contexts/MenuContext'
import { motion } from 'framer-motion'
import { useIsMedium } from '../hooks/useMediaQuery'
import { MenuLinks } from './MenuLinks'

export function Header() {

    const { openMenu, setOpenMenu } = useMenuContext()
    const isXLarge = useIsMedium()

    const variants = !isXLarge ? {
        visible: { opacity: 1, left: "0rem", zIndex: 10, transition: { ease: "easeIn", duration: 0.3 } },
        hidden: { opacity: 0, left: "-30rem", transition: { ease: "easeOut", duration: 0.3 } }
    } : {
        visible: { opacity: 1 },
        hidden: { opacity: 1 },
    }

    return (
        <Box
            position="absolute"
            top="0"
            left="0"
            zIndex="1000"
            w="100%"
        >
            <Flex
                maxW="1200px"
                w={{ base: "100%", md: "initial" }}
                m="0 auto"
                h={{ base: "100vh", md: "120px" }}
                align="center"
                justify={{ base: "center", md: "space-between" }}
                p="20px"
                display="flex"
                position={{ base: "fixed", md: "initial" }}
                as={motion.div}
                variants={variants}
                initial={"hidden"}
                animate={openMenu ? "visible" : "hidden"}
                textTransform="uppercase"
                bg={{ base: "quinary", md: "transparent" }}
            >

                <Flex
                    display="flex"
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: "20px", md: "30px", '2xl': "40px" }}
                    textAlign={{ base: "center", md: "initial" }}
                    w="100%"
                >
                    <MenuLinks />
                </Flex>
            </Flex>

            <Flex
                position="fixed"
                right="1.5rem"
                onClick={() => setOpenMenu(!openMenu)}
                display={{ base: "flex", md: "none" }}
                w="100%"
                left="0"
                top="0"
                p="10px"
                align="center"
                justify='flex-end'
                zIndex={10}
                cursor="pointer"
            >
                <Icon as={!openMenu ? AiOutlineMenu : AiOutlineClose} color="white" fontSize="2rem" fontWeight="light" />
            </Flex>
        </Box>
    )
}