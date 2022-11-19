import { Flex, Button } from '@chakra-ui/react';
import React from 'react';
import './Header.css';

import { useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      direction='row'
      justify='space-between'
      align='center'
      flexWrap='wrap'
      borderBottom='1px solid black'
      p='20px 0'>

      <Flex align='center' direction='row' ml='5em'>
        <Button onClick={toggleColorMode} w='75px'
          variant='outline'>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <h1 className='header__main-logo'>
          Gleb Ershov</h1>
      </Flex>

      <nav className='header__nav-menu'>
        <ul className='header__nav-list'>
          <li className='header__nav-list-item'>Home</li>
          <li className='header__nav-list-item'>Projects</li>
          <li className='header__nav-list-item'>About</li>
        </ul>
      </nav>
    </Flex>
  )
};

export default Header;