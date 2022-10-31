import {
  Box,
  useColorModeValue,
  Heading,
  Stack,
  Icon,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { 
  FaHtml5, 
  FaJsSquare,
  FaReact,
  FaCss3,
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
      <Box p={0} mt={6} id='skills'>
        <Stack spacing={4} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Skills</Heading>
        </Stack>
        <Box my={12}>
          <Wrap spacing='30px' justify='center'>
            {skills.map((i, idx) => 
            <WrapItem key={idx}>
              <Box
                w='180px' 
                h='80px'
                sx={{
                  padding: '10px 20px',
                  textAlign: 'center',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: useColorModeValue('#E2E8F0', 'rgba(255, 255, 255, 0.16)'),
                  borderRadius: '5px',
                  '&:hover': {
                    background: useColorModeValue('#edf2f7', 'rgba(255, 255, 255, 0.16)')
                  }
                }}
              >
                <Icon as={i.icon} w={6} h={6} />
                <Box>{i.label}</Box>
              </Box>
            </WrapItem>)}
          </Wrap>
        </Box>
      </Box>
    </>
  );
}

export default Skills;
