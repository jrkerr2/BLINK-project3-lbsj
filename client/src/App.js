import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateM from './components/CreateM';
import JoinM from './components/JoinM';
import CustomNavbar from './components/Nav';
import Meeting from './components/Meeting';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={CreateM} />
          <Route exact path="/Join" component={JoinM} />          
          <Route exact path="/Meeting/:meetingId" component={ Meeting } />

        </div>
      </Router>
    );
  }
}

export default App;
