import React from 'react';
import './ProjectsPage.css';

import TodoAppBlock from '../../TodoAppBlock';
import NasaAppBlock from '../../NasaAppBlock';
import LandingProjectBlock from '../../LandingProjectBlock';

import ReactTypingEffect from 'react-typing-effect';
import { Box } from '@chakra-ui/react';

import todoApp_light_mode1 from '../../../images/todoApp_light_mode_1.png';
import todoApp_light_mode2 from '../../../images/todoApp_light_mode_2.jpg';
import todoApp_dark_mode from '../../../images/todoApp_dark_mode.png';
import NASA_daily_img1 from '../../../images/NASA_daily_img1.png';
import NASA_daily_img2 from '../../../images/NASA_daily_img2.png';
import NASA_daily_img3 from '../../../images/NASA_daily_img3.png';
import estateLanding_img2 from '../../../images/estateLanding.png';
import estateLanding_img1 from '../../../images/estateLanding_2.png';
import estateLanding_img3 from '../../../images/estateLanding_3.png';


const ProjectsPage = () => {
  const todoImgs = [todoApp_dark_mode, todoApp_light_mode2, todoApp_light_mode1];
  const nasaAppImgs = [NASA_daily_img1, NASA_daily_img2, NASA_daily_img3];
  const landingImgs = [estateLanding_img1, estateLanding_img2, estateLanding_img3];
  return (
    <Box mt='5em'>
      <h2 className='page__title'>
        <ReactTypingEffect
          text={["Projects"]} speed={100} typingDelay={500} eraseDelay={10000}
        />
        <i className='bi bi-slash-lg'></i>
        <i className='bi bi-slash-lg'></i>
      </h2>
      <h3 className='home-page__projects-title'>
        <i className='bi bi-dash'></i>
        ToDo App
        <i className='bi bi-dash'></i>
      </h3>
      <TodoAppBlock imgsURL={todoImgs} />
      <h3 className='home-page__projects-title'>
        <i className='bi bi-dash'></i>
        NASA API
        <i className='bi bi-dash'></i>
      </h3>
      <NasaAppBlock imgsURL={nasaAppImgs} />
      <h3 className='home-page__projects-title'>
        <i className='bi bi-dash'></i>
        Landing page
        <i className='bi bi-dash'></i>
      </h3>
      <LandingProjectBlock imgsURL={landingImgs} />
    </Box>
  )
};
export default ProjectsPage;