import React, { Component } from 'react';
import Message from './Message';
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
                <button className="btn mtb" onClick={this.offTrack} id="offTrack">Meeting Off Track</button>
                <button className="btn mtb" onClick={this.greatPoint} id="greatPoint">Great Point</button>
                <button className="btn mtb" onClick={this.raiseHand} id="raiseHand">Raise your Hand</button>              
            </div>
            
        )
    }
}

export default Buttons 