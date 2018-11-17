import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import Chat from './chat/Chat'


export default class Meeting extends Component {
    render() {
        return(
            <Grid>
              <h1>Welcome! you are in a Meeting</h1>
              <div>Meeting Agenda: </div>
              <div>Criteria: </div>

              <Chat />
                
        
            </Grid>
        )
    }
}