import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skill'
import Contact from '../components/Contact'
import Pok from '../components/PoK'

import { 
  Container
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Container maxW={'6xl'}>
        <Navbar/>
        <About/>
        <Projects/>
        <Skills/>
        <Pok/>
        <Contact/>
        <Footer/>
      </Container>
    </>
  )
}

export default Home
