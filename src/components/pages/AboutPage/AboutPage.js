import { Box, Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import './AboutPage.css';
import ReactTypingEffect from 'react-typing-effect';

const About = () => {
  return (
    <Box mt='5em'>

      <Box>
        <h2 className='page__title'>
          <ReactTypingEffect
            text={["About me"]} speed={100} typingDelay={500} eraseDelay={10000}
          />
          <i className='bi bi-slash-lg'></i>
          <i className='bi bi-slash-lg'></i>
        </h2>
        <Flex directiom='row' justify='flex-start' flexWrap='wrap' align='center' gap='12em'>
          <p className='about-page__description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <Image fallbackSrc='https://via.placeholder.com/500' />
        </Flex>
      </Box>

      <Box mt='3em'>
        <h2 className='page__title'>My skills
          <i className='bi bi-slash-lg'></i>
          <i className='bi bi-slash-lg'></i>
        </h2>
        <ul className='about-page__skills-list'>
          <li className='about-page__skills-list-item'>
            <i className="bi bi-code-square"></i>
            <span className='skill-span'> HTML5</span>
          </li>
          <li className='about-page__skills-list-item'>
            <i className="bi bi-code-square"></i>
            <span className='skill-span'> CSS3</span>
          </li>
          <li className='about-page__skills-list-item'>
            <i className="bi bi-code-square"></i>
            <span className='skill-span'> JavaScript ES6</span>
          </li>
          <li className='about-page__skills-list-item'>
            <i className="bi bi-code-square"></i>
            <span className='skill-span'> React</span>
          </li>
          <li className='about-page__skills-list-item'>
            <i className="bi bi-code-square"></i>
            <span className='skill-span'> Redux Toolkit</span>
          </li>
        </ul>
      </Box>
      <Box mt='3em'>
        <h2 className='page__title'>Contact me
          <i className='bi bi-slash-lg'></i>
          <i className='bi bi-slash-lg'></i>
        </h2>
        <Flex gap='1em' m='1em 0 0 15%'>
          <a href='https://github.com/glebersh' target='_blank'
            rel="noreferrer">
            <Button leftIcon={<i className="bi bi-github"
              style={{ fontSize: '20px' }}></i>} variant='outline'
              _active={{ 'transform': 'scale(0.95,0.95)' }}>
              GitHub
            </Button>
          </a>
          <a href='https://www.linkedin.com/in/gleb-ershov-804b50232/' target='_blank'
            rel="noreferrer">
            <Button leftIcon={<i className="bi bi-linkedin"
              style={{ fontSize: '20px' }}></i>} variant='outline'
              _active={{ 'transform': 'scale(0.95,0.95)' }}>
              LinkedIn
            </Button>
          </a>
          <a href='mailto:glebersh00@gmail.com' target='_blank'
            rel="noreferrer">
            <Button leftIcon={<i className="bi bi-mailbox"
              style={{ fontSize: '20px' }}></i>} variant='outline'
              _active={{ 'transform': 'scale(0.95,0.95)' }}>
              Mail me
            </Button>
          </a>
          <a href='https://t.me/glebersh' target='_blank'
            rel="noreferrer">
            <Button leftIcon={<i className="bi bi-telegram"
              style={{ fontSize: '20px' }}></i>} variant='outline'
              _active={{ 'transform': 'scale(0.95,0.95)' }}>
              Telegram
            </Button>
          </a>
        </Flex>
      </Box>
    </Box>
  )
};

export default About;