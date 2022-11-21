import { CardFooter, Flex, Image, Text, Box, createIcon, Tooltip } from '@chakra-ui/react';
import React from 'react';
import './Gallery.css';

import { Card, Stack, CardBody, Divider, Heading } from '@chakra-ui/react';

import todoApp_light_mode from '../../images/todoApp_light_mode.jpg';
import nasaApp_dark_mode from '../../images/nasaApp_dark_mode.png';
import estateLanding from '../../images/estateLanding.png';

export const cardGHPagesLink = (<Tooltip label='GitHub pages demo'>
  <span className='githubpages-link'>
    <Text fontWeight='700' ml='1em' fontSize='18px' display='inline-block'>GitHub </Text>
    <Text fontSize='18px' display='inline-block'>Pages</Text>
  </span>
</Tooltip>
);

export const cardGitRepoLink = (<Tooltip label='GitHub repository'>
  <i className="bi bi-github card-git-icon"></i>
</Tooltip>)

const Gallery = () => {

  return (
    <main>
      <Flex w='100%' position='relative' direction='row'
        m='3em auto 0' paddingBottom='5em'
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
              <Heading size='md'>ToDo App</Heading>
              <Text h='4em' fontWeight='700'>
                TO-DO application made with React JS and Redux Toolkit, with Register/Authenthification functions, simple json-server and filters.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justify='space-between'
            flexWrap='wrap' align='center'>
            <a>Learn more about this project</a>
            <Box ml='auto'>
              <a href='https://github.com/glebersh/Simple-TO-DO-application-with-reduxjs-toolkit'
                rel='no-refferer' target='_blank'>
                {cardGitRepoLink}
              </a>
              {cardGHPagesLink}
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
              <Heading size='md'>Daily images from NASA API</Heading>
              <Text h='4em' fontWeight='700'>
                Application, which allows you to view images of space every day and learn new information about it, as well as receive data from the long-term archive of NASA observations.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justify='space-between'
            flexWrap='wrap' align='center'>
            <a>Learn more about this project</a>
            <Box ml='auto'>
              <a href='https://github.com/glebersh/NASA-Daily-Image-App'
                rel='no-refferer' target='_blank'>
                {cardGitRepoLink}
              </a>
              {cardGHPagesLink}
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
              <Heading size='md'>Simple Landing Page</Heading>
              <Text h='4em' fontWeight='700'>
                Simple Landing Page made with Vanilla JS, pure CSS3 and HTML5.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justify='space-between'
            flexWrap='wrap' align='center'>
            <a>Learn more about this project</a>
            <Box ml='auto'>
              <a href='https://github.com/glebersh/Greenhouse-Estate-Landing-Page'
                rel='no-refferer' target='_blank'>
                {cardGitRepoLink}
              </a>
              <a href='https://glebersh.github.io/Greenhouse-Estate-Landing-Page/'
                rel='no-refferer' target='_blank'>
                {cardGHPagesLink}
              </a>
            </Box>
          </CardFooter>
        </Card>


      </Flex>
    </main >
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
