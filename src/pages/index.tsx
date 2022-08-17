import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { BgNoise } from '../components/BgNoise'
import { DefaultTitle } from '../components/DefaultTitle'
import { HeaderSection } from '../components/Sections/HeaderSection'
import { ProjectsSection } from '../components/Sections/ProjectsSection'

const Home: NextPage = () => {

  const techs = []

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

        <Flex direction="column" justify="center" align="center">

          <DefaultTitle title='Tecnologias' />

          <SimpleGrid>

          </SimpleGrid>
        </Flex>

      </Flex >

      <BgNoise />
    </>
  )
}

export default Home
