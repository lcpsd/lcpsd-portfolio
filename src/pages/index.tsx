import { Box, Divider, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { BgNoise } from '../components/BgNoise'
import { Container } from '../components/Container'
import { DefaultTitle } from '../components/DefaultTitle'
import { HeaderSection } from '../components/Sections/HeaderSection'
import { ProjectsSection } from '../components/Sections/ProjectsSection'
import { TechSection } from '../components/Sections/TechsSection'

const Home: NextPage = () => {

  const certifications = [
    {
      id: 1,
      imgLink: "https://i.imgur.com/dBJ3jUY.png"
    },
    {
      id: 2,
      imgLink: "https://i.imgur.com/dBJ3jUY.png"
    },
    {
      id: 3,
      imgLink: "https://i.imgur.com/dBJ3jUY.png"
    },
  ]

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

        <Divider borderColor="quaternary" zIndex="1" />

        <TechSection />

        <Divider borderColor="quaternary" zIndex="1" />

        <Container>
          <DefaultTitle title="Certificações" />
        </Container>

      </Flex >

      <BgNoise />
    </>
  )
}

export default Home
