import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { HeaderTitle } from '../components/HeaderTitle'
import { FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi"
import { FloatingIcon } from '../components/FloatingIcon'
import Link from 'next/link'
import { Profile } from '../components/Profile'
import { VideoBg } from '../components/videoBg'

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
      position="unset"
      zIndex="1"
    >
      <Header />

      <Flex height="calc(100vh - 80px)" zIndex="1">
        <HeaderTitle />

        <Flex flex="1" direction="column" align="center" justify="center" gap={10}>
          <Profile
            profileUrl='images/profile-picture.jpeg'
            githubUrl="https://github.com/lcpsd"
            linkedinUrl="https://www.linkedin.com/in/lcpsd/"
            location='Campo Grande - MS'
          />
        </Flex>
      </Flex>

      <Flex
        position="absolute"
        h="100%"
        w='100vw'
        left="0"
        top="0"
      >
        <VideoBg source='https://i.imgur.com/HoH9j5S.mp4' opacity={{ base: '0.5', xl: '1' }} objectFit='cover' />
      </Flex>
    </Flex>
  )
}

export default Home
