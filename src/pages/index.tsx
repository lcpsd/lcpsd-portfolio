import { Box, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { BgNoise } from '../components/BgNoise'
import { Container } from '../components/Container'
import { DefaultTitle } from '../components/DefaultTitle'
import { HeaderSection } from '../components/Sections/HeaderSection'
import { ProjectsSection } from '../components/Sections/ProjectsSection'
import { TechSection } from '../components/Sections/TechsSection'

const Home: NextPage = () => {

  return (
    <>
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

        <ProjectsSection />

        <TechSection />

      </Flex >

      <BgNoise />
    </>
  )
}

export default Home
