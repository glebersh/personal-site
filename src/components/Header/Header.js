import { Flex, Button } from '@chakra-ui/react';
import React from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';

import { useColorMode } from '@chakra-ui/react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      direction='row'
      justify='space-between'
      align='center'
      flexWrap='wrap'
      p='100px 0 0 0'>

      <Flex align='center' direction='row' ml='5em'>
        <Button onClick={toggleColorMode} paddingInline='30px'
          variant='outline' border='none' borderRadius='0'
          _hover={colorMode === 'light' ? { 'backgroundColor': 'rgba(220, 220, 220, 0.2)' }
            : { 'backgroundColor': 'rgba(70, 70, 70, 0.2)' }}>
          {colorMode === 'light' ? <i className="bi bi-lightbulb-off"></i> : <i className="bi bi-lightbulb-fill"></i>}
        </Button>
        <h1 className='header__main-logo'>
          Gleb Ershov</h1>
      </Flex>
      <Flex justify='center' mr='8em' align='center'>
        <nav className='header__nav-menu'>
          <ul className='header__nav-list'>
            <i className="bi bi-menu-button-wide"></i>
            <li className='header__nav-list-item'><NavLink to='/personal-site/'>Home</NavLink></li>
            <li className='header__nav-list-item'><NavLink to='projects'>Projects</NavLink></li>
            <li className='header__nav-list-item'><NavLink to='about'>About</NavLink></li>
          </ul>
        </nav>
        <Button leftIcon={<i className="bi bi-file-earmark-pdf" style={{ fontSize: '20px' }}></i>}
          variant='outline'><a href="path_to_file" download="proposed_file_name">Resume</a></Button>
      </Flex>
    </Flex >
  )
};

export default Header;