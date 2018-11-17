import React, { Component } from 'react';
import {Grid, } from 'react-bootstrap';
import FormExample from './form'



export default class JoinM extends Component {
    render() {
        return(
            <Grid>
              <h1>Join a Meeting</h1>
                <FormExample />
        
            </Grid>
        )
    }
}