import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

import { Flex, Image } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const ImageCarousel = ({ imgsURL, order }) => {
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    setImgIndex(0)
  }, []);

  if (imgIndex > imgsURL.length - 1) {
    setImgIndex(0);
  }
  else if (imgIndex < 0) {
    setImgIndex(2);
  }
  return (
    <Flex align='center' order={order} gap='1em'>
      <ArrowBackIcon fontSize='3em'
        onClick={() => setImgIndex(imgIndex - 1)}
        transition='0.33s'
        _hover={{
          'cursor': 'pointer',
          color: 'rgb(154, 228, 43)'
        }} _active={{ transform: 'scale(0.95,0.95)' }} />
      <Image src={imgsURL[imgIndex]} h='423px' />
      <ArrowForwardIcon fontSize='3em'
        onClick={() => setImgIndex(imgIndex + 1)}
        transition='0.33s'
        _hover={{
          'cursor': 'pointer',
          color: 'rgb(154, 228, 43)'
        }} _active={{ transform: 'scale(0.95,0.95)' }} />
    </Flex>
  )
};
export default ImageCarousel;