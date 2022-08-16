import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { HeaderTitle } from '../components/HeaderTitle'
import { Profile } from '../components/Profile'
import { VideoBg } from '../components/videoBg'
import { IoIosArrowForward } from "react-icons/io"
import { HeaderSection } from '../components/HeaderSection'

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      h="100%"
      w="100%"
      maxW="1280px"
      mx="auto"
      px={10}
      justify="center"
    >
      <HeaderSection />

      <Flex direction="column" bg="quinary" h="100vh">
        <Text color="primary">Projetos</Text>
      </Flex>

    </Flex >
  )
}

export default Home
