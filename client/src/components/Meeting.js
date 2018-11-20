import React, { Component } from 'react';
import {Grid, Col, Row } from 'react-bootstrap';
import Chat from './chat/Chat'



export default class Meeting extends Component {

    // get meeting method// 
    

    render() {
        return(
            <Grid>
              <h1>Welcome! you are in a Meeting</h1>
              <Row>
                  <Col size="md-3">
                    <div>Meeting Agenda: </div>
                    </Col>

                    <Col size="md-9">
                        <p>
                 
                   {/* display agenda */}
                        </p>
                    </Col>
              </Row>
              <Row>
                  <Col size="md-3">
                    <div>Criteria: </div>
                   </Col>
                   <Col size="md-9">
                   <p>
                       {/* display Criteria */}
                   </p>
                   </Col>
              </Row>

              <Chat />
                
        
            </Grid>
        )
    }
}