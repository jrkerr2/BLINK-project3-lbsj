import React, { Component } from 'react';
import {Grid,  } from 'react-bootstrap';
import Basic from './createForms';

export default class CreateM extends Component {
  
  

    render() {
        return(
            <Grid>
              <h1> Please Save The Meeting ID After It's Generated  </h1>     
              <br></br>         
              <Basic />
            </Grid>
        )
    }
}