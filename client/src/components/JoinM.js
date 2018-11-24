import React, { Component } from 'react';
import {Grid, FormControl, FormGroup, HelpBlock, Button, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom'

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
    alert("You are joining a meeting with ID: " + this.state.value);
    console.log("You are going to meeting: " + this.state.value);
    event.preventDefault();    
    this.onSubmitSuccess();
  }
  
//   onSubmitSuccess (result, dispatch, props) {
//     return props.dispatch(routerActions.push(uri));
//  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }
       
  render() {
    return (
      <div>
      
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="meeingID"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Please Enter Your Meeting ID</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter Meeting ID Here"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Meeting ID has a minimium of 10 characters.</HelpBlock>
        </FormGroup>
         <Button type="submit" value="Submit" ><Link to="/Meeting">Submit</Link></Button> 
      </form>
      </div>
    );            
  }
}

