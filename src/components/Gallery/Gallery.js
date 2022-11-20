import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <main>
      <Flex w='65%' position='relative' direction='row'
        m='6em auto 0'
        align='center'
        justify='center'
        flexWrap='wrap' gap='2em'>

        <Image fallbackSrc='https://via.placeholder.com/500'
          _hover={{
            'filter': 'brightness(40%)',
            'cursor': 'pointer'
          }}
          transition='0.33s ease-in-out' />

        <Text pos="absolute" top="50%" left="28%"
          transform="translate(-50%,-50%)"
          fontWeight='700'
          fontSize='2em'
          textAlign='center'>
          Projects
        </Text>

        <Image fallbackSrc='https://via.placeholder.com/500'
          _hover={{
            'filter': 'brightness(40%)',
            'cursor': 'pointer'
          }}
          transition='0.33s ease-in-out' />

        <Text pos="absolute" top="50%" left="71%"
          transform="translate(-50%,-50%)"
          fontWeight='700'
          fontSize='2em'
          textAlign='center'>
          About me
        </Text>

      </Flex>
    </main>
  )
};

export default Gallery;
