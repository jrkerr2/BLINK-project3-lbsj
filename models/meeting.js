const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({

// MEETING SCHEMA HERE    
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }

    nana: { type: String, required: true },
    john: { type: String, required: true },

});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
