import React, { Component } from 'react';
import './buttons.css';

class Buttons extends Component {

    offTrack = (event) => {
        console.log("conversation was off track");
   //     Message.propTypes.messages=(message,"convo offtrack!");
    }

    greatPoint = () => {
        console.log("that was a greatPoint")
    }

    raiseHand = () => {
        console.log(" raised my hand")
    }

    render() {
        return (
            <div>
                <Btn />
                <button className="btn mtb" onClick={this.offTrack} id="offTrack">Meeting Off Track</button>
                <button className="btn mtb" onClick={this.greatPoint} id="greatPoint">Great Point</button>
                <button className="btn mtb" onClick={this.raiseHand} id="raiseHand">Raise your Hand</button>              
            </div>
            
        )
    }
}

export default Buttons 

class Btn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        succeed: false
      };
    }
  
    handleClick() {
      this.setState(previousState => {
        return {
          succeed: !previousState.succeed
        };
      })
    }
  
    render() {
      const succeed = (
        <div>
            <button className="btn mtb" >Meeting Off Track</button>
        </div>
      )
  
      const notsucceed = (
        <div>
          <button className="btn act">Meeting Off Track</button>
        </div>
      )
  
      return (
        <div onClick={this.handleClick.bind(this)}>
          {this.state.succeed ? succeed : notsucceed}
        </div>
      )
    }
  };