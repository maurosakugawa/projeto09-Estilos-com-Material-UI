import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import Formulario from './Formulario';
import { withStyles } from '@material-ui/core/styles';




export default class App extends Component {
  render () {

    return (
      <Box  display={{ sm: "block"}} flexDirection="row" flexWrap="wrap" width="100%" >
        <Formulario />
      </Box>
    );
  }
}

