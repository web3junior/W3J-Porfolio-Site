import { ReactNode } from 'react';
import {
  Box,
  Stack,
  useColorModeValue,
  Container,
  Text,
  chakra,
  VisuallyHidden
} from '@chakra-ui/react'
import { 
  FaGithub, 
  FaTwitter, 
  FaLinkedinIn 
} from 'react-icons/fa';
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        target='_blank'
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

  return (
    <>
      <Box
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Box>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2022 Web3 Junior.</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Github'} href={'https://github.com/web3junior'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'Twitter'} href={'https://twitter.com/Web3Junior'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/junior-web3-5a0335250/'}>
                <FaLinkedinIn />
              </SocialButton>
              <SocialButton label={'Upwork'} href={'https://www.upwork.com/freelancers/~0161090ff5f68211b9'}>
                <SiUpwork />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
