import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './components/theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode >
);