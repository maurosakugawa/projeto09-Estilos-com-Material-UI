import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import Formulario from './Formulario';

export default class App extends Component {
  render () {

    return (
      <Box  display={{ sm: "block"}}>
        <Formulario />
      </Box>
    );
  }
}

