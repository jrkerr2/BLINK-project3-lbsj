import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MessageForm.css'

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
        <div className="input-container">
          <input
            type="text"
            ref={(node) => (this.input = node)}
            placeholder="Enter your message..."
          />
        </div>
        <div className="button-container">
          <button type="submit">
            Send
          </button>
        </div>
        <div>
          <button className="btn " onClick={this.offtrack} >Meeting Off Track</button>
          <button className="btn" onClick={this.greatPoint} >Great Point</button>
          <button className="btn" onClick={this.raiseHand} >Raise your Hand</button>  
        </div>
      </form>
      
    )
  }
}

export default MessageForm

