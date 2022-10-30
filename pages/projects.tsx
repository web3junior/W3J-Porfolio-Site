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
  // {
  //   title: 'NFT Gallery',
  //   thumbnail: '/projects/nft-gallery.png'
  // },
  {
    title: 'NFT Minter',
    thumbnail: '/projects/nft-minter.png'
  },
  {
    title: 'Buy Me A Hamburger',
    thumbnail: '/projects/buy-me-aburger.png'
  },
  {
    title: 'Buffalo Meme Coin',
    thumbnail: '/projects/buffalo-coin.JPG'
  },
  {
    title: 'Piggy Bank Dapp',
    thumbnail: '/projects/piggy-bank.JPG'
  }
]

const ProjectsPage = () => {
  return (
    <>
      <Box p={0} mt={6}>
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
                // _after={{
                //   transition: 'all .3s ease',
                //   content: '""',
                //   w: 'full',
                //   h: 'full',
                //   pos: 'absolute',
                //   top: 5,
                //   left: 0,
                //   backgroundImage: `url(${IMAGE})`,
                //   filter: 'blur(15px)',
                //   zIndex: -1,
                // }}
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
                  Javascript
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  {i.title}
                </Heading>
                <Stack direction={'row'} align={'center'}>
                  <IconButton aria-label='Github link' icon={<ImGithub />} />
                  <IconButton aria-label='Demo link' icon={<ImSphere />} />
                </Stack>
              </Stack>
            </Box>
          </Center>)}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default ProjectsPage;