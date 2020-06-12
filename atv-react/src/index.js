/*
import React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import tema from './temas/tema';

render(
    <ThemeProvider theme={tema}>
        <App />
        <CssBaseline />
    </ThemeProvider>, document.getElementById('root')
);

*/
import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { red, blue, amber } from '@material-ui/core/colors'
import App from './App'
import { Box } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'light'
  },
  spacing: 32
})

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)



