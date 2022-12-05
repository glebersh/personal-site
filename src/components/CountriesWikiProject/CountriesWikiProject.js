import React from 'react'

import { Flex, List, ListItem, Text, Box, Divider } from '@chakra-ui/react';
import ImageCarousel from '../ImageCarousel';

import { reactIconSVG, reduxIconSVG, cssIconSVG, jsIconSVG } from '../../images/svg/svg';

import { cardGitRepoLink, cardGHPagesLink } from '../Gallery/Gallery';

const CountriesWiki = ({ imgsURL }) => {
  return (
    <>
      <Flex m='3em auto 0' w='90%' justify='space-between'>
        <ImageCarousel imgsURL={imgsURL} order={0} />
        <Flex direction='column' w='30%'>
          <h4 className='stack-title'>Introduction</h4>
          <p className='projects-page__pojects-description'>
            This is a simple wiki about countries made with REST API.
          </p>
          <h4 className='stack-title'>Features</h4>
          <List fontSize='18px'>
            <ListItem m='.5em 0 0 .75em'>Filter countries</ListItem>
            <ListItem m='.5em 0 0 .75em'>Search countries by name</ListItem>
          </List>
          <h4 className='stack-title'>Used techonologies</h4>
          <Flex gap='1.5em'>
            {reactIconSVG}
            {reduxIconSVG}
            {jsIconSVG}
            {cssIconSVG}
          </Flex>
        </Flex>
      </Flex>

      <Text m='3em 0 0 8em' fontSize='20px' w='70%'>
        The following technologies were also used for this project: <strong>Styled Components</strong> was used for faster and easier creation of the user interface,
        <strong> and React Router DOM v6</strong> was used to give access to the user to view the page of a specific country.
        <Divider w='100%' m='2em 0 0 0' />
      </Text>

      <Text m='1em 0 0 9em' fontSize='18px' display='inline-block'>Get acquainted with this project: </Text>
      <Box display='inline-block' ml='3em'>
        <a href='https://github.com/glebersh/countries_wiki/'
          rel='no-refferer' target='_blank'>
          {cardGitRepoLink}
        </a>
        <a href='https://glebersh.github.io/countries_wiki/' target='_blank' rel='no-refferer'>
          {cardGHPagesLink}
        </a>
      </Box>
    </>
  )
};

export default CountriesWiki;