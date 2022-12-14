import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { CurrentSection } from '../components/CurrentSection'
import { DefaultDivider } from '../components/default/DefaultDivider'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { CertificationSection } from '../components/Sections/CertificationsSection'
import { ContactSection } from '../components/Sections/ContactSection'
import { HeaderSection } from '../components/Sections/HeaderSection'
import { ProjectsSection } from '../components/Sections/ProjectsSection'
import { TechSection } from '../components/Sections/TechsSection'

const Home: NextPage = () => {

  return (
    <Box
      position="relative"
    >
      <Header />
      <CurrentSection />
      <Flex
        direction="column"
        h="100%"
        w="100%"
        maxW="1280px"
        mx="auto"
        px={{ base: 5, md: 10 }}
        justify="center"
      >
        <HeaderSection />

        <ProjectsSection />

        <DefaultDivider />

        <TechSection />

        <DefaultDivider />

        <CertificationSection />

        {/* <DefaultDivider /> */}

        {/* <FormSection /> */}
        <ContactSection />
        <Footer />

      </Flex >
    </Box>
  )
}

export default Home
