import React, { Component } from 'react';
// import logo from './logo.svg';
import altLogo from './sun.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={altLogo} className="App-logo" alt="logo" />
          <p>
            Project 3: Full stack React-based application coming soon to a Bootcamp near you...
          </p>
          <a
            className="App-link"
            href="https://trello.com/b/bHI6yGNU/coding-bootcamp-project-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Trello board.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
