import { render } from '@testing-library/react';
import { theme } from '../styles/thmes';
import { ThemeProvider } from 'styled-components';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
