import React, { Component } from 'react';
import {Grid, FormControl, FormGroup, HelpBlock, Button, ControlLabel } from 'react-bootstrap';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import Meeting from './Meeting';

export default class JoinM extends Component {
    render() {
        return(
            <Grid>
              <h1>Join a Meeting</h1>
                <JoinMeetingForm />
            </Grid>
        )
    }
}

class JoinMeetingForm extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
 

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert("You are joining a meeting with ID: " + this.state.value);
    console.log("You are going to meeting: " + this.state.value);
    event.preventDefault();    
    // this.onSubmitSuccess();
  }
  
//   onSubmitSuccess (result, dispatch, props) {
//     return props.dispatch(routerActions.push(uri));
//  }

  getValidationState() {
    const length = this.state.value.length;
    if (length === 24) {
      return 'success';
    }
    else { 
      return 'error';
    }  
  }
       
  render() {
    return (
      <BrowserRouter>
      <div>
      
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="meetingID"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Please enter your meeting ID</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter Meeting ID Here"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>A Blink meeting ID is 24 characters (example: "5bf44a736b802d4dec36884d").</HelpBlock>
        </FormGroup>
         <Button type="submit" disabled={this.getValidationState()!=="success"} value="Submit" ><Link to={`/Meeting/${this.state.value}`}>Submit</Link></Button> 
      </form>
      <Route path="/Meeting/:meetingId" component={Meeting} />
      </div>
      </BrowserRouter>
    );            
  }
}

