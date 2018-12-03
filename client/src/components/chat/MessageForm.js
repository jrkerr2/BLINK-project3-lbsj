import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MessageForm.css'
import { Grid, Row} from 'react-bootstrap'

class MessageForm extends Component {
  static propTypes = {
    onMessageSend: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    this.input.focus()
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.onMessageSend(this.input.value)
    console.log(this.input.value)
    this.input.value = ""
  }

  offtrack= (event)=> {
    event.preventDefault()
    this.props.onMessageSend("Meeting is Off Track!")
    this.input.value=""
  }

  greatPoint= (event)=> {
    event.preventDefault()
    this.props.onMessageSend("Great Point!")
    this.input.value=""
  }

  raiseHand =(event) =>{
    event.preventDefault()
    this.props.onMessageSend("I have something to say")
  }

  render() {
    return (
      <form className="MessageForm" onSubmit={this.handleFormSubmit}>
        <Row>
          <Grid>
        <div className="input-container">
          <input
            type="text"
            ref={(node) => (this.input = node)}
            placeholder="Enter your message..."
            className="inp"
          />
        
          <button type="submit" className="btn">
            Send
          </button>
     
       
          
          <button className="btn OT" onClick={this.offtrack} >Meeting Off Track</button>
          <button className="btn GP" onClick={this.greatPoint} >Great Point</button>
          <button className="btn RH" onClick={this.raiseHand} >Raise your Hand</button>  
          </div>
          </Grid>
          </Row>
      </form>
      
    )
  }
}

export default MessageForm

