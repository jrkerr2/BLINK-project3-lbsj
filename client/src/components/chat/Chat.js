import React, { Component } from 'react';
import MessageForm from './MessageForm';
import MessageList from "./MessageList";
import Buttons from './buttons'
import axios from 'axios'
import './Chat.css';


class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  } 

  handleNewMessage = (text) => {
    this.setState({
      messages: [...this.state.messages, { me: true, author: localStorage.getItem('user'), body: text }],
    })
    axios.put(`/api/meetings/${ this.props.meetingID }`, {
      feed:this.state.messages
    }
      )
    .then(response => {
        console.log(response.data.feed)
    })
    console.log(this.props.meetingID)
  }
  
  render() {
    return (
      <div className="Chat">
        <Buttons />
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    );
  }
}


export default Chat;
