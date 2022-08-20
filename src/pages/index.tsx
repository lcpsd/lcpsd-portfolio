import { Box, Flex, } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { BigLight } from '../components/BigLight'
import { DefaultDivider } from '../components/DefaultDivider'
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
        px={5}
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
