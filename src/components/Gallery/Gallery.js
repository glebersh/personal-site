import { CardFooter, Flex, Image, Text, Box } from '@chakra-ui/react';
import React from 'react';
import './Gallery.css';

import { Card, Stack, CardBody, Divider, Heading } from '@chakra-ui/react';

import todoApp_light_mode from '../../images/todoApp_light_mode.jpg';
import nasaApp_dark_mode from '../../images/nasaApp_dark_mode.png';
import estateLanding from '../../images/estateLanding.png';

const Gallery = () => {
  return (
    <main>
      <Flex w='100%' position='relative' direction='row'
        m='3em auto 0'
        align='center'
        justify='center'
        flexWrap='wrap' gap='3em'>


        <Card maxW='lg' bgColor='inherit'>
          <CardBody>
            <Image
              src={todoApp_light_mode}
              alt='TODO app screenshot'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justify='space-between'
            flexWrap='wrap' align='center'>
            <a>Learn more about this project</a>
            <Box ml='auto'>
              <i className="bi bi-github"></i>
              <span>GitHub </span><span>Pages</span>
            </Box>
          </CardFooter>
        </Card>

        <Card maxW='lg' bgColor='inherit'>
          <CardBody>
            <Image
              src={nasaApp_dark_mode}
              alt='NASA API image screenshot'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justify='space-between'
            flexWrap='wrap' align='center'>
            <a>Learn more about this project</a>
            <Box ml='auto'>
              <i className="bi bi-github"></i>
              <span>GitHub </span><span>Pages</span>
            </Box>
          </CardFooter>
        </Card>

        <Card maxW='lg' bgColor='inherit'>
          <CardBody>
            <Image
              src={estateLanding}
              alt='Landing screenshot'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justify='space-between'
            flexWrap='wrap' align='center'>
            <a>Learn more about this project</a>
            <Box ml='auto'>
              <i className="bi bi-github"></i>
              <span>GitHub </span><span>Pages</span>
            </Box>
          </CardFooter>
        </Card>


      </Flex>
    </main>
  )
};

export default Gallery;


{/* <Image
src={todoApp_light_mode}
fallbackSrc='https://via.placeholder.com/500'
_hover={{
  'filter': 'brightness(40%)',
  'cursor': 'pointer'
}}
transition='0.33s ease-in-out' />

<Text pos="absolute" top="25%" left="50%"
transform="translate(-50%,-50%)"
fontWeight='700'
fontSize='2em'
textAlign='center'>
Projects
</Text>
<Image
src={nasaApp_dark_mode}
fallbackSrc='https://via.placeholder.com/500'
_hover={{
  'filter': 'brightness(40%)',
  'cursor': 'pointer'
}}
transition='0.33s ease-in-out' />

<Text pos="absolute" top="75%" left="50%"
transform="translate(-50%,-50%)"
fontWeight='700'
fontSize='2em'
textAlign='center'>
About me
</Text> */}
