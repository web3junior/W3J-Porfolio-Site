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
    Button,
  } from '@chakra-ui/react';
  import { ImGithub, ImSphere } from "react-icons/im";
  import { EmailIcon } from '@chakra-ui/icons';
  const IMAGE = '/project1.png';
  
  const Contact = () => {
    return (
      <>
        <Box p={0} mt={6}>
          <Stack spacing={4} textAlign={'center'} justifyContent="center" alignItems="center">
            <Heading fontSize={'3xl'}>Contact</Heading>
            <Box style={{marginTop: 0}}>
              <Button w="fit-content" my='3rem'>
                <EmailIcon />
              </Button>
            </Box>
          </Stack>
        </Box>
      </>
    );
  }
  
  export default Contact;