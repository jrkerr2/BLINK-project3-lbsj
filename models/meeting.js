const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({

// MEETING SCHEMA HERE    
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }

// John's TEST SCHEMA
    meeting_id: { type: String, required: false },
    meeting_name: { type: String, required: false },
    upvote: { type: Boolean, required: false },
    off: { type: Boolean, required: false },
    hand: { type: Boolean, required: false }

// Shauna's initial SCHEMA
    // meeting_id: { type: String, unique: true },
    // meeting_name: { type: String },
    // objective: [{ type: String }],
    // acceptance_criteria: { type: String, },
    // resolution: { type: String },
    // notes: [{ type: String }], 
    // attendees: [{ type: String, array: Array }],
    // cost: { type: Number },
    // duration: [{ type: Number }],
    // rating: [{ type: Number }],
    // role: [{ type: String }]

});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
