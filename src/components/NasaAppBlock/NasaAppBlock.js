
import React from 'react'
import './NasaAppBlock.css';

import { Flex, List, ListItem, Text, Box, Divider } from '@chakra-ui/react';
import ImageCarousel from '../ImageCarousel';

import { reactIconSVG, cssIconSVG, jsIconSVG } from '../../images/svg/svg';

import { cardGitRepoLink, cardGHPagesLink } from '../Gallery/Gallery';

const NasaAppBlock = ({ imgsURL }) => {

  return (
    <>
      <Flex m='3em auto 0' w='90%' justify='space-between'>
        <ImageCarousel imgsURL={imgsURL} order={1} />
        <Flex direction='column' w='30%' ml='5em'>
          <h4 className='stack-title'>Introduction</h4>
          <p className='projects-page__pojects-description'>
            NASA Daily Image App is an application, which allows you to view images of space every day and learn new information about it, as well as receive data from the long-term archive of NASA observations.
          </p>
          <h4 className='stack-title'>Features</h4>
          <List fontSize='18px'>
            <ListItem m='.5em 0 0 .75em'>Getting daily updated images and data about space</ListItem>
            <ListItem m='.5em 0 0 .75em'>Ability to view a randomly selected image from the entire archive of observations</ListItem>
            <ListItem m='.5em 0 0 .75em'>Getting the selected number of images and related data for a certain period of time</ListItem>
            <ListItem m='.5em 0 0 .75em'>Dark and light theme of the app</ListItem>
          </List>
          <h4 className='stack-title'>Used techonologies</h4>
          <Flex gap='1.5em'>
            {reactIconSVG}
            {jsIconSVG}
            {cssIconSVG}
          </Flex>
        </Flex>
      </Flex>

      <Text m='3em 0 0 8em' fontSize='20px' w='70%'>
        This app also contains Moment.js, a library for working with dates and React Router v6, which allows users to navigate between application pages.
        <h4 className='stack-title'>How would I improve (and plan to) improve this project?</h4>
        <List fontSize='18px'>
          <ListItem m='.5em 0 0 .75em'>Implement other API's from NASA into this application to make a more complete and interesting application</ListItem>
        </List>
        <Divider w='100%' m='2em 0 0 0' />
      </Text>

      <Text m='1em 0 0 9em' fontSize='18px' display='inline-block'>Get acquainted with this project: </Text>
      <Box display='inline-block' ml='3em'>
        <a href='https://github.com/glebersh/NASA-Daily-Image-App'
          rel='no-refferer' target='_blank'>
          {cardGitRepoLink}
        </a>
        <a href='https://glebersh.github.io/NASA-Daily-Image-App/' target='_blank' rel='no-refferer'>
          {cardGHPagesLink}
        </a>
      </Box>
    </>
  )
};

export default NasaAppBlock;