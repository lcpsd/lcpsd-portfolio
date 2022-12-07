import { Box, Flex, Icon, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useMenuContext } from '../contexts/MenuContext'
import { useIsLarge, useIsXlarge } from '../hooks/useMediaQuery'
import { MenuLinks } from './MenuLinks'

export function Header() {

    const { openMenu, setOpenMenu } = useMenuContext()
    const isXlarge = useIsXlarge()

    const variants = !isXlarge ? {
        visible: { opacity: 1, left: "0rem", zIndex: 10, transition: { ease: "easeIn", duration: 0.3 } },
        hidden: { opacity: 0, left: "-30rem", transition: { ease: "easeOut", duration: 0.3 } }
    } : {
        visible: { opacity: 1 },
        hidden: { opacity: 1 },
    }

    const { colorMode, toggleColorMode } = useColorMode()

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
                w={{ base: "100%", lg: "initial" }}
                m="0 auto"
                h={{ base: "100vh", lg: "120px" }}
                align="center"
                justify={{ base: "center", lg: "space-between" }}
                p="20px"
                display="flex"
                position={{ base: "fixed", lg: "initial" }}
                as={motion.div}
                variants={variants}
                initial={"hidden"}
                animate={openMenu ? "visible" : "hidden"}
                textTransform="uppercase"
                bg={{ base: "quinary", lg: "transparent" }}
            >

                <Flex
                    display="flex"
                    direction={{ base: "column", lg: "row" }}
                    textAlign={{ base: "center", lg: "initial" }}
                    w="100%"
                >
                    <MenuLinks />
                    {/* <IconButton
                        icon={colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
                        onClick={toggleColorMode}
                        aria-label=""
                    /> */}
                </Flex>
            </Flex>

            <Flex
                position="fixed"
                right="1.5rem"
                onClick={() => setOpenMenu(!openMenu)}
                display={{ base: "flex", lg: "none" }}
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