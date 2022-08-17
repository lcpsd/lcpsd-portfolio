import { Box, Button, Divider, Flex, Img, SimpleGrid, Text, Textarea } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { SwiperSlide } from 'swiper/react'
import { BgNoise } from '../components/BgNoise'
import { BigLight } from '../components/BigLight'
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

        <BigLight
          top="-20rem"
          m="auto"
          left="-120rem"
        />

        <BigLight
          top="20rem"
          left="-20rem"
          m="auto"
          opacity="0.5"
        />

        <BigLight
          top={{ sm: "200rem", lg: "80rem" }}
          left={{ sm: "-30rem", lg: "-50rem" }}
        />
      </Flex >
    </Box>
  )
}

export default Home
