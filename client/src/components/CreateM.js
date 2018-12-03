import React, { Component } from 'react';
import {Grid,  } from 'react-bootstrap';
import Basic from './createForms';

export default class CreateM extends Component {
  
  

    render() {
        return(
            <Grid className="cr">
              <h3>Create a Blink Meeting™</h3>
              {/* <h5>(Please use the generated ID for your meeting invitations)</h5>      */}
              <br></br>         
              <Basic />
            </Grid>
        )
    }
}