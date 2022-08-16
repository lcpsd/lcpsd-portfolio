import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { HeaderTitle } from '../components/HeaderTitle'
import { FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi"
import { FloatingIcon } from '../components/FloatingIcon'
import Link from 'next/link'
import { Profile } from '../components/Profile'

const Home: NextPage = () => {
  return (
    <Flex direction="column" h="100%" w="100%" maxW="1280px" mx="auto" px={10} justify="center">
      <Header />

      <Flex height="calc(100vh - 80px)">
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
    </Flex>
  )
}

export default Home
