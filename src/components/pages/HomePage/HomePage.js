import React from 'react'
import './HomePage.css';
import Gallery from '../../Gallery';
import { Box } from '@chakra-ui/react';
import ReactTypingEffect from 'react-typing-effect';

const HomePage = () => {
  return (
    <Box mt='5em'>
      <h2 className='page__title'>
        <ReactTypingEffect
          text={["Hello!"]} speed={100} typingDelay={500} eraseDelay={10000}
        />
        <i className='bi bi-slash-lg'></i>
        <i className='bi bi-slash-lg'></i>
      </h2>

      <p className='home-page__about-description'>
        <ReactTypingEffect
          text={["Welcome to my personal website! This is the home page, if you are interested in my pet projects - go to the projects tab, and in the about tab you can find up-to-date information about me and my contact details."]}
          speed={65} typingDelay={1500} eraseDelay={100000}
        />
      </p>
      <h3 className='home-page__projects-title'>
        <i className='bi bi-dash'></i>
        Latest projects
        <i className='bi bi-dash'></i>
      </h3>
      <Gallery />
    </Box>
  )
};
export default HomePage;