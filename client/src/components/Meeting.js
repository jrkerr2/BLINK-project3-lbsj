import React, { Component } from 'react';
import {Grid, Col, Row } from 'react-bootstrap';
import Chat from './chat/Chat';
import axios from 'axios';
import './Meeting.css'



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

        const attendeeList = this.state.meetings.attendees;
        console.log(attendeeList)



        return(
            <Grid>

              <h1>Welcome! you are in a Meeting</h1>
              <h2>{this.props.match.params.meetingId}</h2>
              
              <Row>
                  <Col md={3}>
                    <div className="agenda">Meeting Agenda:  </div>
                    </Col>

                    <Col md={9}>
                        <div>{this.state.meetings.agenda}
                 
               
                        </div>
                    </Col>
              </Row>
              <Row>
                  <Col md={3}>
                    <div className="criteria">Criteria:  </div>
                   </Col>
                   <Col md={9}>
                   <div>{this.state.meetings.criteria}
             
                   </div>
                   </Col>
              </Row>
                <Row >
                <Col md={2}>
                    <div className="attendees">{this.state.meetings.attendees}
                     </div>
       
   
                    </Col>
                    <Col md={10}>
                        <Chat />
                    </Col>
                </Row>
              

              
                
        
            </Grid>
        )
    }
}

