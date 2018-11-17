import React, { Component } from 'react';
import {Grid,  } from 'react-bootstrap';
import Basic from './createForms';

export default class CreateM extends Component {
  
  

    render() {
        return(
            <Grid>
              <h1>  create a meeting </h1>              
              <Basic />
            </Grid>
        )
    }
}