(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},150:function(e,t,a){},152:function(e,t,a){},154:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),i=(a(85),a(9)),o=a(10),s=a(12),u=a(11),m=a(13),h=(a(87),a(188)),d=a(189),g=a(128),p=a(79),b=a(177),f=a(178),E=a(179),v=a(180),O=a(187),j=a(181),y=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Create!"),r.a.createElement(p.a,{initialValues:{agenda:"",criteria:""},validate:function(e){var t={};return e.agenda||(t.agenda="Meeting Agenda is Required"),t},onSubmit:function(e,t){var a=t.setSubmitting;setTimeout(function(){alert(e.agenda),console.log(e),fetch("/api/meetings",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return console.log(e),console.log(e._id),e.json()}).then(function(e){console.log(e),console.log(e._id),alert("Use this ID to send to your invitees: "+e._id)}),a(!1)},400)}},function(e){var t=e.values,a=e.errors,n=e.touched,c=e.handleChange,l=e.handleBlur,i=e.handleSubmit,o=e.isSubmitting;return r.a.createElement("form",{onSubmit:i},r.a.createElement(b.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{md:4},r.a.createElement(v.a,null,"Agenda")),r.a.createElement(E.a,{md:8},r.a.createElement(O.a,{componentClass:"textarea",type:"agenda",name:"agenda",onChange:c,onBlur:l,value:t.agenda}),a.agenda&&n.agenda&&a.agenda))),r.a.createElement(b.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{md:4},r.a.createElement(v.a,null,"Criteria")),r.a.createElement(E.a,{md:8},r.a.createElement(O.a,{componentClass:"textarea",type:"criteria",name:"criteria",onChange:c,onBlur:l,value:t.criteria}),a.criteria&&n.criteria&&a.criteria))),r.a.createElement(j.a,{type:"submit",disabled:o,value:"Submit"},"Create"))}))},C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("h1",null,"  create a meeting "),r.a.createElement(y,null))}}]),t}(n.Component),k=a(22),S=a(182),M=a(183),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("h1",null,"Join a Meeting"),r.a.createElement(w,null))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(k.a)(Object(k.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(Object(k.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("You are going to meeting: "+this.state.value),e.preventDefault()}},{key:"getValidationState",value:function(){return 24===this.state.value.length?"success":"error"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(b.a,{controlId:"meetingID",validationState:this.getValidationState()},r.a.createElement(v.a,null,"Please enter your meeting ID"),r.a.createElement(O.a,{type:"text",value:this.state.value,placeholder:"Enter Meeting ID Here",onChange:this.handleChange}),r.a.createElement(O.a.Feedback,null),r.a.createElement(S.a,null,'A Blink meeting ID is 24 characters (example: "5bf44a736b802d4dec36884d").')),r.a.createElement(M.a,{to:"/Meeting/".concat(this.state.value)},r.a.createElement(j.a,{type:"submit",disabled:"success"!==this.getValidationState(),value:"Submit"},"Submit")," ")))}}]),t}(r.a.Component),D=a(186),P=a(184),I=a(185),T=(a(129),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,{default:!0,collapseOnSelect:!0},r.a.createElement(D.a.Header,null,r.a.createElement(D.a.Brand,null,r.a.createElement(M.a,{to:"/"},"Blink")),r.a.createElement(D.a.Toggle,null)),r.a.createElement(D.a.Collapse,null,r.a.createElement(P.a,{pullRight:!0},r.a.createElement(I.a,{eventKey:1,componentClass:M.a,href:"/",to:"/"},"Create a Meeting"),r.a.createElement(I.a,{eventKey:2,componentClass:M.a,href:"/Join",to:"/Join"},"Join a Meeting"),r.a.createElement(I.a,{eventKey:3,componentClass:M.a,href:"/Meeting",to:"/Meeting"},"On Going Meeting"))))}}]),t}(n.Component)),H=a(78),x=(a(146),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.input.focus()},a.handleFormSubmit=function(e){e.preventDefault(),a.props.onMessageSend(a.input.value),a.input.value=""},a.offtrack=function(e){e.preventDefault(),a.props.onMessageSend("Meeting is Off Track!"),a.input.value=""},a.greatPoint=function(e){e.preventDefault(),a.props.onMessageSend("Great Point!"),a.input.value=""},a.raiseHand=function(e){e.preventDefault(),a.props.onMessageSend("I have something to say")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"MessageForm",onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{type:"text",ref:function(t){return e.input=t},placeholder:"Enter your message..."})),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{type:"submit"},"Send")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn ",onClick:this.offtrack},"Meeting Off Track"),r.a.createElement("button",{className:"btn",onClick:this.greatPoint},"Great Point"),r.a.createElement("button",{className:"btn",onClick:this.raiseHand},"Raise your Hand")))}}]),t}(n.Component)),A=a(5),J=a.n(A),B=(a(148),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=J()("Message",{log:!this.props.author,me:this.props.me});return r.a.createElement("div",{className:e},this.props.author&&r.a.createElement("span",{className:"author"},this.props.author,":"),this.props.body)}}]),t}(n.Component)),z=(a(150),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidUpdate=function(){a.node.scrollTop=a.node.scrollHeight},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"MessageList",ref:function(t){return e.node=t}},this.props.messages.map(function(e,t){return r.a.createElement(B,Object.assign({key:t},e))}))}}]),t}(n.Component));z.defaultProps={messages:[]};var F=z,G=(a(152),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).offTrack=function(e){console.log("conversation was off track")},a.greatPoint=function(){console.log("that was a greatPoint")},a.raiseHand=function(){console.log(" raised my hand")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"btn mtb",onClick:this.offTrack,id:"offTrack"},"Meeting Off Track"),r.a.createElement("button",{className:"btn mtb",onClick:this.greatPoint,id:"greatPoint"},"Great Point"),r.a.createElement("button",{className:"btn mtb",onClick:this.raiseHand,id:"raiseHand"},"Raise your Hand"))}}]),t}(n.Component)),R=(a(154),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleNewMessage=function(e){a.setState({messages:Object(H.a)(a.state.messages).concat([{me:!0,author:"Me",body:e}])})},a.state={messages:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Chat"},r.a.createElement(G,null),r.a.createElement(F,{messages:this.state.messages}),r.a.createElement(x,{onMessageSend:this.handleNewMessage}))}}]),t}(n.Component)),V=a(75),K=a.n(V),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={meeting:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;K.a.get("/api/meetings/".concat(this.props.match.params.meetingId)).then(function(t){e.setState({meeting:t.data}),console.log(t.data)}),console.log(this.state.meeting)}},{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("h1",null,"Welcome! You are in Meeting:"),r.a.createElement("h2",null,this.props.match.params.meetingId),r.a.createElement(f.a,null,r.a.createElement(E.a,{size:"md-3"},r.a.createElement("div",null,"Meeting Agenda:  ")),r.a.createElement(E.a,{size:"md-9"},this.state.meeting.agenda)),r.a.createElement(f.a,null,r.a.createElement(E.a,{size:"md-3"},r.a.createElement("div",null,"Criteria:  ")),r.a.createElement(E.a,{size:"md-9"},this.state.meeting.criteria)),r.a.createElement(R,null))}}]),t}(n.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(d.a,{exact:!0,path:"/",component:C}),r.a.createElement(d.a,{exact:!0,path:"/Join",component:N}),r.a.createElement(d.a,{exact:!0,path:"/Meeting/:meetingId",component:_})))}}]),t}(n.Component);l.a.render(r.a.createElement(U,null),document.getElementById("root"))},80:function(e,t,a){e.exports=a(176)},85:function(e,t,a){},87:function(e,t,a){}},[[80,2,1]]]);
//# sourceMappingURL=main.62f468e8.chunk.js.map