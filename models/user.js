const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

// USER SCHEMA HERE
    
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
});

const Book = mongoose.model("User", userSchema);

module.exports = User;