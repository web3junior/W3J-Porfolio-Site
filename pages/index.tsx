import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutPage from './about'
import ProjectsPage from './projects'
import Skills from './skill'
import Contact from './contact'
import Pok from './pok'

import { 
  Container,
  Box 
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Container maxW={'6xl'}>
        <Navbar/>
        <AboutPage/>
        <ProjectsPage />
        <Skills />
        <Pok/>
        <Contact />
        <Footer/>
      </Container>
    </>
  )
}

export default Home
