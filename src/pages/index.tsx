import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { HeaderSection } from '../components/Sections/HeaderSection'
import { ProjectsSection } from '../components/Sections/ProjectsSection'

const Home: NextPage = () => {


  return (
    <>
      <Box
        bgImg="/images/scratch-seamless.webp"
        backgroundRepeat="repeat"
        h="100%"
        w="100%"
        position="absolute"
        zIndex="-2"
        bgSize="200px"
        mixBlendMode="hard-light"
        opacity="0.05"
      />
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
