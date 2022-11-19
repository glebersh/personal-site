import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const breakpoints = {
  xs: "320px",
  s: "480px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  xll: "1440px"
};

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', '#181818')(props),
        color: mode('black', 'white')(props),
      },
    })
  },
  breakpoints,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  }
});

export default theme;