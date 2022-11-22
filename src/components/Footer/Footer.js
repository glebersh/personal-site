import React from 'react';
import './Footer.css';

import { Box, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box backgroundColor='#181818' mt='auto' p='20px'>
      <Flex align='center' gap='2em'>

        <a href='https://github.com/glebersh' className='footer-link'
          target='_blank'
          rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>

        <a href='https://www.linkedin.com/in/gleb-ershov-804b50232/' className='footer-link'
          target='_blank'
          rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>

        <a href='mailto:glebersh00@gmail.com' className='footer-link'
          target='_blank'
          rel="noreferrer">
          <i className="bi bi-mailbox"></i>
        </a>

        <a href='https://t.me/glebersh' className='footer-link'
          target='_blank'
          rel="noreferrer">
          <i className="bi bi-telegram"></i>
        </a>
        <span className='personal-site-link'>This site also has own <a href='https://github.com/glebersh/personal-site'
          target='_blank' rel='norefferer'>repository!</a></span>
      </Flex>
    </Box >
  )
};

export default Footer;