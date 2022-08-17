import { Box, Button, Divider, Flex, Img, SimpleGrid, Text, Textarea } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { SwiperSlide } from 'swiper/react'
import { BgNoise } from '../components/BgNoise'
import { Container } from '../components/Container'
import { DefaultCarousel } from '../components/DefaultCarousel'
import { DefaultDivider } from '../components/DefaultDivider'
import { DefaultField } from '../components/DefaultField'
import { DefaultTitle } from '../components/DefaultTitle'
import { CertificationSection } from '../components/Sections/CertificationsSection'
import { FormSection } from '../components/Sections/FormSection'
import { HeaderSection } from '../components/Sections/HeaderSection'
import { ProjectsSection } from '../components/Sections/ProjectsSection'
import { TechSection } from '../components/Sections/TechsSection'

const Home: NextPage = () => {

  return (
    <Box
      position="relative"
    >
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

        <FormSection />
      </Flex >
    </Box>
  )
}

export default Home
