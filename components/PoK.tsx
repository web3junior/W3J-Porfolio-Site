import {
  Box,
  Heading,
  Stack,
  Image,
  SimpleGrid,
  Flex,
  Tooltip,
  chakra,
  Icon,
} from '@chakra-ui/react';

import { 
  GiSailboat 
} from "react-icons/gi";

const poks = [
  {
    title: 'NFT 101 Certificate', 
    from: 'Cadena', 
    thumb: './pok/trung-0001.png',
    opensea: 'https://opensea.io/assets/matic/0x112721c13dd721a543a0c805791dceebdbaf308d/139'
  },
  {
    title: 'Ethereum 101 Certificate', 
    from: 'Cadena', 
    thumb: './pok/trung-0005.png',
    opensea: 'https://opensea.io/assets/matic/0x112721c13dd721a543a0c805791dceebdbaf308d/136'
  },
  {
    title: 'Alchemy Road to Web3 - Week One', 
    from: 'Alchemy', 
    thumb: './pok/alchemy-721-pok.png',
    opensea: 'https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/583'
  },
  {
    title: 'Build a Web3 App: Mint Your Own NFT collection | Cohort Xeon | #15', 
    from: 'Buildspace', 
    thumb: './pok/render.png',
    opensea: 'https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/22466'
  },
]

const Pok = () => {
  return (
    <>
      <Box p={0} mt={6} id='pok'>
        <Stack spacing={4} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Proof of Knowledge</Heading>
        </Stack>
        <Box my={12}>
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

                  <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box
                      fontSize="xs"
                      fontWeight="semibold"
                      color='gray.500'
                      letterSpacing='wide'>
                      {i.from}
                    </Box>
                    <Tooltip hasArrow label='Opensea' bg='gray.300' color='black' placement='top'>
                      <chakra.a href={i.opensea} target='_blank' display={'flex'}>
                        <Icon as={GiSailboat} color='#ba68c8' h={5} w={5} alignSelf={'center'} />
                      </chakra.a>
                    </Tooltip>
                  </Flex>

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
