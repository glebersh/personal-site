import React from 'react';
import './ProjectsPage.css';

import ProjectsItem from '../../Projects-item';
import ReactTypingEffect from 'react-typing-effect';
import { Box } from '@chakra-ui/react';

import todoApp_light_mode from '../../../images/todoApp_light_mode.jpg';
import nasaApp_dark_mode from '../../../images/nasaApp_dark_mode.png';
import estateLanding from '../../../images/estateLanding.png';

const ProjectsPage = () => {
  const images = [todoApp_light_mode, nasaApp_dark_mode, estateLanding];
  return (
    <Box mt='5em'>
      <h2 className='page__title'>
        <ReactTypingEffect
          text={["Projects"]} speed={100} typingDelay={500} eraseDelay={10000}
        />
        <i className='bi bi-slash-lg'></i>
        <i className='bi bi-slash-lg'></i>
      </h2>
      <ProjectsItem order={0} imgsURL={images} />
    </Box>
  )
};
export default ProjectsPage;