import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
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
          <Text w='30%' m='3em 0 0 15em' fontSize='20px'>
            Hi, I'm Gleb and I'm 21 years old. I am engaged in web development and this site was also created by me.
            I have been interested in programming for about a year and came here after graduating from university in a completely different
            specialization.<br />
            <Text m='1em 0 1em'><strong>Why did I decide to do programming and espesially frontend?</strong></Text>
            That's because I like to create applications that the user will directly interact with.
            I am sure that a good UI and UX is one of the foundations of a successful and popular product.
            I am currently in the process of studying advanced technologies in this field (frameworks and libraries).<br />

            <Text m='1em 0 1em'>At the moment <strong>I am looking for an internship or a junior position of a frontend developer</strong>, where I can gain new skills and knowledge,
              as well as improve my code!</Text><br />

            I hope that you are interested in this site and my portfolio in particular,
            the necessary contacts for which you can contact me are presented at the bottom of the page, well, then I will tell you about my skills!
          </Text>
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
            <span className='skill-span'> JavaScript</span>
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
        <Text fontSize='20px' w='60%' m='3em 0 0 10em'>I am familiar with <strong>HTML5 and CSS3</strong>, I understand the principles of semantic layout,
          I can work with <strong>Flex and Grid and create adaptive web design</strong>. I can interact with the DOM using <strong>JavaScript</strong>,
          perform asynchronous operations and work with promises. I can work with both <strong>React</strong> functional components through hooks,
          and with class components and their lifecycle. I can organize application state management using <strong>Redux Toolkit</strong>,
          and I have routing skills using <strong>React Router DOM v6. </strong>
          I mostly use pure CSS3 in page styling, but I'm also familiar with the advantages and basics of working with <strong>CSS preprocessors (mainly SASS)</strong>.</Text>
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