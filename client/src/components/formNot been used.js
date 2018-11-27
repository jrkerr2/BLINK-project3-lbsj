import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

class FormExample extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }
  
    getValidationState() {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Please Enter Your Meeting URL</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter URL"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
        
          </FormGroup>
        </form>
      );
    }
  }
  
export default FormExample;