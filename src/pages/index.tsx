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
