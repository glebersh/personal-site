
import React from 'react'
import './LandingProjectBlock.css';

import { Flex, List, ListItem, Text, Box, Divider } from '@chakra-ui/react';
import ImageCarousel from '../ImageCarousel';

import { reactIconSVG, cssIconSVG, jsIconSVG, htmlIconSVG } from '../../images/svg/svg';

import { cardGitRepoLink, cardGHPagesLink } from '../Gallery/Gallery';

const LandingProjectBlock = ({ imgsURL }) => {

  return (
    <>
      <Flex m='3em auto 0' w='90%' justify='space-between'>
        <ImageCarousel imgsURL={imgsURL} order={0} />
        <Flex direction='column' w='30%' ml='5em'>
          <h4 className='stack-title'>Introduction</h4>
          <p className='projects-page__pojects-description'>
            Simple landing page made according to the layout of Figma.
          </p>
          <h4 className='stack-title'>Features</h4>
          <List fontSize='18px'>
            <ListItem m='.5em 0 0 .75em'>Responsive design</ListItem>
          </List>
          <h4 className='stack-title'>Used techonologies</h4>
          <Flex gap='1.5em'>
            {htmlIconSVG}
            {cssIconSVG}
            {jsIconSVG}
          </Flex>
        </Flex>
      </Flex>

      <Divider w='23%' m='2em 0 0 10em' />

      <Text m='1em 0 0 9em' fontSize='18px' display='inline-block'>Get acquainted with this project: </Text>
      <Box display='inline-block' ml='3em'>
        <a href='https://github.com/glebersh/Greenhouse-Estate-Landing-Page'
          rel='no-refferer' target='_blank'>
          {cardGitRepoLink}
        </a>
        <a href='https://glebersh.github.io/Greenhouse-Estate-Landing-Page/' target='_blank' rel='no-refferer'>
          {cardGHPagesLink}
        </a>
      </Box>
    </>
  )
};

export default LandingProjectBlock;