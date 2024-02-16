import "./CustomHeader.css"
import { Flex, Text, Box, Image} from '@chakra-ui/react'


const CustomHeader = () => {
  return (
    <Flex justify="center" align="center" margin='40px'>
      <Box p='4'>
        <Text fontSize='5xl'>¡Hola! Me llamo</Text>
        <Text fontSize='6xl'>Oscar Barrera Rivera</Text>
        <Text fontSize='xl' color='gray'>Soy Desarrollador Web FullStack en Madrid</Text>
      </Box>
      <Box p='4'>
          <Image
            borderRadius='15px'
            boxSize='200px'
            src='https://www.shutterstock.com/shutterstock/photos/1431792596/display_1500/stock-photo-bangkok-thailand-june-model-buzz-lightyear-robot-toy-character-form-toy-story-animation-1431792596.jpg'
            alt='Buzz'
          />
      </Box>
    </Flex>

  )
}

export default CustomHeader;