import { Flex, Icon, Link as ChakraLink, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from "next/link"
import { FiRepeat } from "react-icons/fi"
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <Flex direction="column" h="100%" w="100%" maxW="1280px" mx="auto" px={10} justify="center">
      <Header />
    </Flex>
  )
}

export default Home
