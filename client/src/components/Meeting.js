import React, { Component } from 'react';
import {Grid, Col, Row } from 'react-bootstrap';
import Chat from './chat/Chat';
import axios from 'axios';



export default class Meeting extends Component {
    state ={
        meeting:'',
        user: ''
    }

    // get meeting method// 
    componentDidMount() {
        this.askName();
        axios.get(`/api/meetings/${ this.props.match.params.meetingId }`)
        //axios.get("/api/meetings/{}")
        .then(res=>{
            this.setState({ meeting: res.data });
            console.log(res.data)
        })
        
        console.log(this.state.meeting)
    }

    askName() {        
        var person = prompt("Please enter your name:", "");
        if (person !== null && person !== "") {
            localStorage.setItem('user', person);
            this.setState({ user: person });
            console.log("almost to put")
            axios.put(`/api/meetings/${ this.props.match.params.meetingId }`, {

                attendees: person
                }
            )
            .then(response => {
                console.log(response)
            })

        } else {
            this.askName()
        }
    }
    

    render() {
        return(
            <Grid>

              <h1>Welcome! You are in Meeting:</h1>
              <h2>{ this.props.match.params.meetingId }</h2>
              
              <Row>
                  <Col size="md-3">
                    <div>Meeting Agenda:  </div>
                    </Col>

                    <Col size="md-9">
                    
                        { this.state.meeting.agenda }
                        
                    </Col>
              </Row>
              <Row>
                  <Col size="md-3">
                    <div>Criteria:  </div>
                   </Col>
                   <Col size="md-9">
                   
                        { this.state.meeting.criteria }             
                   
                   </Col>
              </Row>

              <Chat />

              
                
        
            </Grid>
        )
    }
}