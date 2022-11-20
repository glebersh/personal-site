import React from 'react'
import './HomePage.css';
import Gallery from '../../Gallery';
import { Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box mt='5em'>
      <h2 className='home-page__about-title'>Hello!
        <i className='bi bi-slash-lg'></i>
        <i className='bi bi-slash-lg'></i>
      </h2>
      <p className='home-page__about-description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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