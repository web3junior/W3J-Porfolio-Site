import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const AboutPage = () => {
    return (
      <>
        <Box>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 28 }}
            direction={{ base: 'column', md: 'row' }}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'red.400',
                    zIndex: -1,
                  }}>
                  Hello, i'm a
                </Text>
                <br />
                <Text as={'span'} color={'red.400'}>
                  Web3 Developer.
                </Text>
              </Heading>
              <Text color={'gray.500'}>
                Before i worked as a Web2 fullstack developer but today i can write smart contract and build complete dapps like gamefi, defi, dex.
              </Text>
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}>
              <Box
                position={'relative'}
                height={'400px'}
                width={'full'}
                overflow={'hidden'}>
                <Image
                  alt={'Hero Image'}
                  fit={'contain'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  src='/bg.png'
                />
              </Box>
            </Flex>
          </Stack>
        </Box>
      </>
    )
  }
  
  export default AboutPage;