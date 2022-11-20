import { Flex, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';

import { useColorMode } from '@chakra-ui/react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [activeLink, setActiveLink] = useState('');

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
          {colorMode === 'light' ? <i class="bi bi-lightbulb-off"></i> : <i class="bi bi-lightbulb"></i>}
        </Button>
        <h1 className='header__main-logo'>
          Gleb Ershov</h1>
      </Flex>

      <nav className='header__nav-menu'>
        <ul className='header__nav-list'>
          <i class="bi bi-menu-button-wide"></i>
          <li className={activeLink === 'link-1' ? 'header__nav-list-item active' : 'header__nav-list-item'}
            id='link-1'
            onClick={(e) => setActiveLink(e.target.id)}><NavLink to='/personal-site'>Home</NavLink></li>
          <li className={activeLink === 'link-2' ? 'header__nav-list-item active' : 'header__nav-list-item'}
            id='link-2'
            onClick={(e) => setActiveLink(e.target.id)}><NavLink to='projects'>Projects</NavLink></li>
          <li className={activeLink === 'link-3' ? 'header__nav-list-item active' : 'header__nav-list-item'}
            id='link-3'
            onClick={(e) => setActiveLink(e.target.id)}><NavLink to='about'>About</NavLink></li>
        </ul>
      </nav>
    </Flex >
  )
};

export default Header;