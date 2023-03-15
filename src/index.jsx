import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/thmes';
import Home from './templates/App/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
