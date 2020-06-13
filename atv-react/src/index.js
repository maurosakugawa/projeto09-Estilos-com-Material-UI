
import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, amber } from '@material-ui/core/colors'
import App from './App'

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



