import { Box, Flex, Grid, Img, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { A11y, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HeaderSection } from '../components/HeaderSection'
import { ProjectsSlide } from '../components/ProjectsSlide'

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

      <Flex direction="column" h="100vh" align="center" py={10}>
        <Text color="primary" fontSize="3xl">Projetos</Text>

        <ProjectsSlide />
      </Flex>

    </Flex >
  )
}

export default Home
