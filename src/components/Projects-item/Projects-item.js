import { Flex, Image, Box, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import './Projects-item.css';


import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';


const ProjectsItem = ({ imgsURL, order }) => {

  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    setImgIndex(0)
  }, []);

  if (imgIndex > 2) {
    setImgIndex(0);
  }
  else if (imgIndex < 0) {
    setImgIndex(2);
  }

  return (
    <Flex mt='3em'>
      <Flex align='center'>
        <ArrowBackIcon fontSize='3em'
          onClick={() => setImgIndex(imgIndex - 1)}
          transition='0.33s'
          _hover={{
            'cursor': 'pointer',
            color: 'rgb(154, 228, 43)'
          }} _active={{ transform: 'scale(0.95,0.95)' }} />
        <Image src={imgsURL[imgIndex]} />
        <ArrowForwardIcon fontSize='3em'
          onClick={() => setImgIndex(imgIndex + 1)}
          transition='0.33s'
          _hover={{
            'cursor': 'pointer',
            color: 'rgb(154, 228, 43)'
          }} _active={{ transform: 'scale(0.95,0.95)' }} />
      </Flex>




      <p className='projects-page__pojects-description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </Flex>
  )
};

export default ProjectsItem;