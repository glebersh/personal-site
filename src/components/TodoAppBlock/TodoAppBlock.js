
import React from 'react'
import './TodoAppBlock.css';

import { Flex, List, ListItem, Text, Box, Divider } from '@chakra-ui/react';
import ImageCarousel from '../ImageCarousel';

import { reactIconSVG, reduxIconSVG, cssIconSVG, jsIconSVG, htmlIconSVG } from '../../images/svg/svg';

import { cardGitRepoLink, cardGHPagesLink } from '../Gallery/Gallery';

const TodoAppBlock = ({ imgsURL }) => {
  return (
    <>
      <Flex m='3em auto 0' w='90%' justify='space-between'>
        <ImageCarousel imgsURL={imgsURL} order={0} />
        <Flex direction='column' w='30%'>
          <h4 className='stack-title'>Introduction</h4>
          <p className='projects-page__pojects-description'>
            This project is a simple TODO application made with React and Redux Toolkit.
            This project was developed in order to study and gain practical experience in managing the state of applications.
          </p>
          <h4 className='stack-title'>Features</h4>
          <List fontSize='18px'>
            <ListItem m='.5em 0 0 .75em'>Authenthification</ListItem>
            <ListItem m='.5em 0 0 .75em'>Filter tasks by date / complete state</ListItem>
            <ListItem m='.5em 0 0 .75em'>Editing tasks text</ListItem>
            <ListItem m='.5em 0 0 .75em'>The ability to get tasks from the built-in JSON server</ListItem>
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
        The following technologies were also used for this project: <strong>UI Charka</strong> was used for faster and easier creation of the user interface,
        <strong> React Router DOM v6</strong> was used to enable "client-side routing", which also improves the user experience from using the application.
        User authentication was performed using <strong> Google Firebase.</strong> Adding/editing/deleting and other user actions with tasks are performed
        using fetch requests to a very simple server and a database created by <strong>JSON-Server</strong>.
        <h4 className='stack-title'>How would I improve (and plan to) improve this project?</h4>
        <List fontSize='18px'>
          <ListItem m='.5em 0 0 .75em'>Allow users to specify more information when registering</ListItem>
          <ListItem m='.5em 0 0 .75em'>Improve the design and make it more colorful, add a large number of color themes</ListItem>
        </List>
        <Divider w='100%' m='2em 0 0 0' />
      </Text>

      <Text m='1em 0 0 9em' fontSize='18px' display='inline-block'>Get acquainted with this project: </Text>
      <Box display='inline-block' ml='3em'>
        <a href='https://github.com/glebersh/Simple-TO-DO-application-with-reduxjs-toolkit'
          rel='no-refferer' target='_blank'>
          {cardGitRepoLink}
        </a>
        <a href='https://glebersh.github.io/TO-DO-application/' target='_blank' rel='no-refferer'>
          {cardGHPagesLink}
        </a>
      </Box>
    </>
  )
};

export default TodoAppBlock;