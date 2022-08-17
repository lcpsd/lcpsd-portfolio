import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { BgNoise } from '../components/BgNoise'
import { HeaderSection } from '../components/Sections/HeaderSection'
import { ProjectsSection } from '../components/Sections/ProjectsSection'

const Home: NextPage = () => {


  return (
    <>
      <BgNoise />
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

      </Flex >
    </>
  )
}

export default Home
