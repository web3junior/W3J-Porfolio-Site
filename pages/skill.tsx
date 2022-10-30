import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    IconButton,
    Grid,
    GridItem,
    Icon,
    Wrap,
    WrapItem,
  } from '@chakra-ui/react';
  import { ImGithub, ImSphere } from "react-icons/im";
  const IMAGE = '/project1.png';
  import { 
    FaGithub, 
    FaHtml5, 
    FaJsSquare,
    FaReact,
    FaCss3,
    FaPython,
    FaPhp,
    FaVuejs,
    FaHardHat,
  } from 'react-icons/fa';
  import { SiSolidity } from 'react-icons/si';
  
  const skills = [
    {label: 'HTML', icon: FaHtml5},
    {label: 'Javascript', icon: FaJsSquare},
    {label: 'Reactjs', icon: FaReact},
    {label: 'Solidity', icon: SiSolidity},
    {label: 'Hardhat', icon: FaHardHat},
    {label: 'CSS', icon: FaCss3},
    {label: 'Vuejs', icon: FaVuejs},
    {label: 'PHP', icon: FaPhp}
  ]

  const Skills = () => {
    return (
      <>
        <Box p={0} mt={6}>
          <Stack spacing={4} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Skills</Heading>
          </Stack>
          <Box my={12}>
            {/* <SimpleGrid columns={{base: 2, md: 5}} spacingX='40px' spacingY='20px' my='12'>
              {['HTML','Javascript','Reactjs','Solidity','CSS','Python','PHP'].map((i) => 
              <Box
                sx={{
                  padding: '10px 20px',
                  textAlign: 'center',
                  border: '1px solid #E2E8F0',
                  borderRadius: '5px',
                  '&:hover': {
                    background: '#edf2f7'
                  }
                }}
              >
                <Icon as={FaGithub} w={6} h={6} />
                <div>{i}</div>
              </Box>)}
            </SimpleGrid> */}
            <Wrap spacing='30px' justify='center'>
              {skills.map((i, idx) => 
              <WrapItem key={idx}>
                <Box
                  w='180px' 
                  h='80px'
                  sx={{
                    padding: '10px 20px',
                    textAlign: 'center',
                    border: '1px solid #E2E8F0',
                    borderRadius: '5px',
                    '&:hover': {
                      background: useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.16)')
                    }
                  }}
                >
                  <Icon as={i.icon} w={6} h={6} />
                  <Box>{i.label}</Box>
                </Box>
                {/* <Center w='180px' h='80px' bg='red.200'>
                  <Icon as={FaGithub} w={6} h={6} />
                  <div>{i}</div>
                </Center> */}
              </WrapItem>)}
            </Wrap>

            {/* <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
            </Grid> */}
          </Box>
        </Box>
      </>
    );
  }
  
  export default Skills;