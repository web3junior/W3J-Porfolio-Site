import {
  Box,
  Heading,
  Stack,
  Button,
} from '@chakra-ui/react';
import {
  EmailIcon
} from '@chakra-ui/icons';

const Contact = () => {
  return (
    <>
      <Box p={0} mt={6} id='contact'>
        <Stack spacing={4} textAlign={'center'} justifyContent="center" alignItems="center">
          <Heading fontSize={'3xl'}>Contact</Heading>
          <Box style={{ marginTop: 0 }}>
            <Button w="fit-content" my='3rem'
              onClick={() => window.location.href = 'mailto:web3junior@gmail.com'}
            >
              <EmailIcon />
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Contact;
