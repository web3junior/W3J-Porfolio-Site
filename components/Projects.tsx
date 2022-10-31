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
} from '@chakra-ui/react';
import { ImGithub, ImSphere } from "react-icons/im";
const IMAGE = '/project1.png';

const projects = [
  {
    title: 'NFT Minter',
    thumbnail: '/projects/nft-minter.png',
    source: 'https://github.com/web3junior/NFT-Minter',
    live: 'https://w3j-nft-minter.vercel.app/',
    stack: 'Solidity, Reactjs'
  },
  {
    title: 'Buy Me A Hamburger',
    thumbnail: '/projects/buy-me-aburger.png',
    source: 'https://github.com/web3junior/BuyMeABurger',
    live: 'https://buy-me-aburger.vercel.app/',
    stack: 'Solidity, Reactjs'
  },
  {
    title: 'Buffalo Meme Coin',
    thumbnail: '/projects/buffalo-coin.JPG',
    source: 'https://github.com/web3junior/Buffalo-Coin',
    live: 'https://buffalo-coin.vercel.app/',
    stack: 'Solidity, Vuejs'
  },
  {
    title: 'Piggy Bank Dapp',
    thumbnail: '/projects/piggy-bank.JPG',
    source: 'https://github.com/web3junior/Piggy-Bank',
    live: 'https://piggy-bank3.vercel.app/',
    stack: 'Solidity, Reactjs'
  }
]

const Projects = () => {
  return (
    <>
      <Box p={0} mt={6} id='projects'>
        <Stack spacing={4} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Projects</Heading>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} my='12'>
          {projects.map((i, idx) => 
          <Center key={idx}>
            <Box
              role={'group'}
              pb={6}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              borderWidth="1px"
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                pos={'relative'}
                height={'230px'}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={'100%'}
                  objectFit={'cover'}
                  src={i.thumbnail}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  {i.stack}
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  {i.title}
                </Heading>
                <Stack direction={'row'} align={'center'}>
                  <a href={i.source} target='_blank'><IconButton aria-label='Github link' icon={<ImGithub />} /></a>
                  <a href={i.live} target='_blank'><IconButton aria-label='Demo link' icon={<ImSphere />} /></a>
                </Stack>
              </Stack>
            </Box>
          </Center>)}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Projects;
