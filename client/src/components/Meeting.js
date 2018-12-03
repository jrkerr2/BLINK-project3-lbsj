import React, { Component } from 'react';
import { Grid, Col, Row, Table } from 'react-bootstrap';
import Chat from './chat/Chat';
import axios from 'axios';
import './Meeting.css'



export default class Meeting extends Component {
    state ={
        meeting:'',
        user: ''
    }

    // get meeting method// 
    componentDidMount() {
        this.askName();
        setInterval(() => {
            // console.log('Alligator!!!!');
            axios.get(`/api/meetings/${ this.props.match.params.meetingId }`)
            .then(res => {
                this.setState({ meeting: res.data });
                //console.log(res.data)
            })
        }, 1000);      
        
        console.log(this.state.meeting)        
    }

    // pollDb() {
    //     this.askNamme();
    //     axios.get(`/api/meetings/${ this.props.match.params.meetingId }`)
    //     .then(res => {
    //             this.setState({ meeting: res.data });
    //             console.log(res.data)
    //     })
    //     setTimeout(pollDb, 1000);
    // };

    askName() {        
        var person = prompt("Please enter your name:", "");
        if (person !== null && person !== "") {
            localStorage.setItem('user', person);
            this.setState({ user: person });
            // console.log("almost to put")
            axios.put(`/api/meetings/attendees/${ this.props.match.params.meetingId }`, {
                attendees: person

             })
            .then(response => {
                console.log(response)
            })

        } else {
            this.askName()
        }
    }
    

    render() {
        return(
            <Grid>
            
              <Row className="agenda">
                  <Col md={5}>
                    <div><h3>Meeting Agenda: </h3> </div>
                    </Col>

                    <Col md={11} mdOffset={1}>
                    
                        <div ><p>{ this.state.meeting.agenda }</p></div>
                        
                    </Col>
              </Row>
              <Row>
                  <Col md={3} className="agenda">
                   <div><h3>Outcome:  </h3></div>
                   </Col>
                   <Col md={11} mdOffset={1}>
                   
                        <p>{ this.state.meeting.criteria } </p>            
                   
                   </Col>
              </Row>
              <hr></hr>
                <Row>
                    <Col md={5}>
                    {/* <h5>Attendees</h5>
                       
                         <div className="attendees">{ this.state.meeting.attendees }</div>  */}
                         <Table responsive className="att">
                            
                            
                            
                            <thead className="tableheader">
                                <tr><th className="header2" colSpan={5}>Reported to Meeting : Present Attenddees</th></tr>
                                <tr>
                                <th>P</th>
                                
                                <th>Occupation</th>
                                <th>Name</th>
                                <th>T</th>
                                <th>Assginee</th>
                               
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td><img src={'https://us.123rf.com/450wm/alexwhite/alexwhite1603/alexwhite160302787/53462430-up-arrow-black-and-red-glossy-internet-icon-on-black-background.jpg?ver=6'} /></td>

                                
                                <td>DEV-2</td>
                                <td>Lucky</td>
                                <td>
                                    <img src={'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX14381468.jpg'} />
                                </td>
                                <td>Admin</td>
                               
                               
                                </tr>
                                <tr>
                               
                                <td><img src={'https://us.123rf.com/450wm/alexwhite/alexwhite1603/alexwhite160302787/53462430-up-arrow-black-and-red-glossy-internet-icon-on-black-background.jpg?ver=6'} /></td>

                                <td>PRM-2</td>
                                <td>Bob</td>
                                <td><img src={'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX14381468.jpg'} /></td>
                                <td>Admin</td>
                              
                                </tr>
                                <tr>
                                
                                <td><img src={'https://us.123rf.com/450wm/alexwhite/alexwhite1603/alexwhite160302787/53462430-up-arrow-black-and-red-glossy-internet-icon-on-black-background.jpg?ver=6'} /></td>

                                <td>DEV-2</td>
                                <td>Shauna</td>
                                <td><img src={'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX14381468.jpg'} /></td>
                                <td>Admin</td>
                                </tr>
                                <tr>
                                
                                <td><img src={'https://us.123rf.com/450wm/alexwhite/alexwhite1603/alexwhite160302787/53462430-up-arrow-black-and-red-glossy-internet-icon-on-black-background.jpg?ver=6'} /></td>

                                <td>DEV-3</td>
                                <td>Jonh</td>
                                <td><img src={'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX14381468.jpg'} /></td>
                                <td>Admin</td>
                                </tr>
                            </tbody>
                            </Table>
                    </Col>
                    <Col md={7}>
                        
                             
                                 
                                <Chat meetingID={this.props.match.params.meetingId}/>
                         
                     
                       
                    </Col>
              </Row>
               
                        
        
            </Grid>
        )
    }
}
// i tried to map the attenddees list got error this.state.attendees.map is not a function


// class AttList extends Component{
//     state={
//         attendees:" "
//     }

//     componentDidMount() {
       
//             axios.get(`/api/meetings/attendees/${ this.props.match.params.meetingId }`)
//             .then(res => {
//                 this.setState({ attendees: res.data });
//                 //console.log(res.data)
           
        
//         console.log(this.state.attendees)        
//     })}
//     render(){
  
//         return(
//             <div>{this.state.attendees.map(attendee=><li>{attendee}</li>)}</div>
//         )
//     }
// }