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
    console.log(this.state.messages);
    axios.put(`/api/meetings/feed/${ this.props.meetingID }`, {
      feed:this.state.messages
    }
      )
    .then(response => {
        console.log(response.data.feed)
    })
    console.log("This is your MESSAGE meeting ID: " + this.props.meetingID);
    console.log("*messages* from Chat.js: " + this.state.messages);
  }
  
  render() {
    return (
      <div className="Chat">
        <Buttons />
        <MessageList messages={ this.state.messages } />
        <MessageForm onMessageSend={ this.handleNewMessage } />
      </div>
    );
  }
}


export default Chat;
