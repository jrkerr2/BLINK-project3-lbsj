import React, { Component } from 'react';
import {Grid, Col, Row } from 'react-bootstrap';
import Chat from './chat/Chat';
import axios from 'axios';



export default class Meeting extends Component {
    state ={
        meetings:""
    }

    // get meeting method// 
    componentDidMount() {
        axios.get( `/api/meetings/${this.props.match.params.meetingId}`)
        //axios.get("/api/meetings/{}")
        .then(res=>{
            console.log(res)
            this.setState({ meetings: res.data });
        })
    }
    

    render() {
        return(
            <Grid>

              <h1>Welcome! you are in a Meeting</h1>
              <h2>{this.props.match.params.meetingId}</h2>
              
              <Row>
                  <Col size="md-3">
                    <div>Meeting Agenda:  </div>
                    </Col>

                    <Col size="md-9">
                        <p>{this.state.meetings.agenda}
                 
               
                        </p>
                    </Col>
              </Row>
              <Row>
                  <Col size="md-3">
                    <div>Criteria:  </div>
                   </Col>
                   <Col size="md-9">
                   <div>{this.state.meetings.criteria}
             
                   </div>
                   </Col>
              </Row>

              <Chat />

              
                
        
            </Grid>
        )
    }
}