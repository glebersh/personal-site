import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './components/theme/theme';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode >
);