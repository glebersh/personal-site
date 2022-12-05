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
          text={[`Welcome to my personal website! On this site, you can get acquainted with my projects and learn more about me.`]}
          speed={65} typingDelay={1500} eraseDelay={1000000}
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