import { Box, Divider, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SwiperSlide } from 'swiper/react'
import { BgNoise } from '../components/BgNoise'
import { Container } from '../components/Container'
import { DefaultCarousel } from '../components/DefaultCarousel'
import { DefaultDivider } from '../components/DefaultDivider'
import { DefaultTitle } from '../components/DefaultTitle'
import { CertificationSection } from '../components/Sections/CertificationsSection'
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

        <DefaultDivider />

        <TechSection />

        <DefaultDivider />

        <CertificationSection />

        <DefaultDivider />

      </Flex >

      <BgNoise />
    </>
  )
}

export default Home
