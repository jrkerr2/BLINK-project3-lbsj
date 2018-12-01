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
      messages: [{me: true, author: "Facilitator", body: "Welcome to the meeting!"}]
    }
  } 
  
  handleNewMessage = (text) => {
    let newMessage = { me: true, author: localStorage.getItem('user'), body: text }

    axios.put(`/api/meetings/feed/${ this.props.meetingID }`, {
        feed: JSON.stringify(newMessage) // JSON.stringify(this.state.messages[this.state.messages.length-1])
      })  
      // .then( res => this.returnFeed())
      // .catch(err => console.log("Promise error" + err))   
    
    this.setState((prevState) => ({
      messages: [...prevState.messages, { me: true, author: localStorage.getItem('user'), body: text }],
    }))

  }

  returnFeed = () => {
    axios.get("/api/meetings/feed/")
    .then(res => {
        console.log("Roxy says: " + res.data);
          // this.setState({ messages: res.data.feed });
          //console.log(res.data)
      })

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

// ******* REF ONLY *******
//
// this.setState((prevState) => ({
//   messages: [...prevState.messages, { me: true, author: localStorage.getItem('user'), body: text }],
// }))
// console.log("Roxy says this is in STATE: " + JSON.stringify(this.state.messages));
// axios.put(`/api/meetings/feed/${ this.props.meetingID }`, {
//   feed: JSON.stringify(this.state.messages[this.state.messages.length-1])
// }
//   )
// .then(response => {
//     console.log("Line 27 in Chat.js: " + response.data.feed)
// })
// console.log("This is your MESSAGE meeting ID: " + this.props.meetingID);
// console.log("*messages* from Chat.js: " + this.state.messages);
// another commentt

