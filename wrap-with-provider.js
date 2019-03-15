import React from 'react';
import { ThemeProvider } from 'styled-components'


import theme from './src/utils/theme';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
