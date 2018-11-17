const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

// USER SCHEMA HERE
    
userName: { type: String, trim: true, required: "Username is Required"},
password: { type: String, trim: true, required: "Password is Required", validate: [function(input){return input.length >= 6;}, "Password should be longer"]},
email:{ type: String, unique: true, match: [/.+@.\..+/, "Please enter valid e-mail address"]},
userCreated: { type: Date, default: Date.now}
});

const User = mongoose.model("User", userSchema);

module.exports = User;