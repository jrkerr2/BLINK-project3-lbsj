import React, { Component } from 'react';
import {Grid, Col, Row } from 'react-bootstrap';
import Chat from './chat/Chat';
import axios from 'axios';



export default class Meeting extends Component {
    state ={
        meetings:[]
    }

    // get meeting method// 
    componentDidMount() {
        axios.get( "/api/meetings")
        
        .then(res=>{
            console.log(res)
            this.setState({ meetings: res.data });
        })
    }
    

    render() {
        return(
            <Grid>

              <h1>Welcome! you are in a Meeting</h1>
              
              <Row>
                  <Col size="md-3">
                    <div>Meeting Agenda:  </div>
                    </Col>

                    <Col size="md-9">
                        <p>{this.state.meetings.map(meetings=> <li>{meetings.agenda}</li>)}
                 
               
                        </p>
                    </Col>
              </Row>
              <Row>
                  <Col size="md-3">
                    <div>Criteria:  </div>
                   </Col>
                   <Col size="md-9">
                   <div>{this.state.meetings.map(meetings=> <li>{meetings.criteria}</li>)}
             
                   </div>
                   </Col>
              </Row>

              <Chat />

              
                
        
            </Grid>
        )
    }
}