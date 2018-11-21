import React, { Component } from 'react';
import {Grid, } from 'react-bootstrap';
import FormExample from './form'



export default class JoinM extends Component {
    render() {
        return(
            <Grid>
              <h1>Join a Meeting</h1>
                <FormExample />
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
    alert('Your are joining meeting id: ' + this.state.value);
    event.preventDefault();
   
    
  }
  
  
       
  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Meeting ID: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          
        </label>
        <input type="submit" value="Submit" />
      </form>
      
    );
  }
}