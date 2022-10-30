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

const poks = [
  {title: 'NFT 101 Certificate', from: 'Cadena', thumb: './pok/trung-0001.png'},
  {title: 'Build a Web3 App: Mint Your Own NFT collection | Cohort Xeon | #15', from: 'Buildspace', thumb: './pok/render.png'},
  {title: 'NFT 101 Certificate', from: 'Cadena', thumb: './pok/trung-0001.png'},
  {title: 'Build a Web3 App: Mint Your Own NFT collection | Cohort Xeon | #15', from: 'Buildspace', thumb: './pok/render.png'},
]

const Pok = () => {
  return (
    <>
      <Box p={0} mt={6}>
        <Stack spacing={4} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Proof of Knowledge</Heading>
        </Stack>
        <Box my={12} sx={{
          // borderWidth: 1,
          // borderStyle: 'solid',
          // borderColor: '#E2E8F0',
          // borderRadius: '5px'
        }}>
          <SimpleGrid columns={{base: 1, sm: 2, md: 4}} spacingX='40px' spacingY='20px' my='12' mx='20px'>
            {poks.map((i, idx) => 

              <Box key={idx} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Box
                  rounded={'lg'}
                  pos={'relative'}
                  height={'230px'}
                >
                  <Image
                    height={230}
                    width={'100%'}
                    objectFit={'cover'}
                    src={i.thumb}
                    alt={i.title}
                  />
                </Box>

                <Box p='4'>
                  <Box display='flex' alignItems='baseline'>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                    >
                      {i.from}
                    </Box>
                  </Box>

                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {i.title}
                  </Box>
                </Box>
              </Box>
            )}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default Pok;