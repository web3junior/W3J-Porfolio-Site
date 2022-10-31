import {
  Flex,
  Box,
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
  Link,
  HStack,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Text,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon
} from '@chakra-ui/icons';
import { BsSun, BsMoon } from 'react-icons/bs';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = ['About', 'Projects', 'Skills', 'PoK', 'Contact'];

  const NavLink = ({ children }: { children: any }) => (
    <Link
      px={2}
      py={2}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={`#${children.toLowerCase()}`}>
      {children}
    </Link>
  );

  return (
    <>
      <Box 
        position="fixed"
        bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)')}
        backdropFilter="saturate(180%) blur(5px)" 
        w="100%" 
        padding={'0 15px'} 
        left={0} 
        zIndex={2}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontWeight={500}
            color={useColorModeValue('gray.800', 'white')}>
            <span style={{color: '#ba68c8', fontWeight: '700'}}>W3J</span> Profilio
          </Text>

          <Flex alignItems={'center'}>
            <HStack spacing={8} alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Stack direction={'row'} spacing={7} ml={{base: '0', md: '12px'}}>
              <Button onClick={toggleColorMode} p='0'>
                {colorMode === 'light' ? <BsMoon /> : <BsSun />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
        {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
