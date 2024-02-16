import { Flex, Text, Button, Stack, Box, AbsoluteCenter } from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail, IoCall } from "react-icons/io5";

const Contact = () => {

  return (
    <Box position='relative' h='200px'>
      <AbsoluteCenter bg='tomato' p='4' color='white' axis='both'>
        <Flex direction='column'>
          <Text>Puede contactar conmigo através de las siguentes vías:</Text>
          <Stack spacing={4} direction='row' align='center'>
            <Button colorScheme='gray' size="xs" rightIcon={<FaGithub></FaGithub>}></Button>
            <Button colorScheme='gray' size="xs" rightIcon={<FaLinkedin></FaLinkedin>}></Button>
            <Button colorScheme='gray' size="xs" rightIcon={<IoMail></IoMail>}></Button>
            <Button colorScheme='gray' size="xs" rightIcon={<IoCall></IoCall>}></Button>
          </Stack>
        </Flex>
      </AbsoluteCenter>
    </Box>

  )
}


export default Contact;