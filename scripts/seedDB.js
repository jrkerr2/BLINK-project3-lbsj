const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Blink collection and inserts the meetings below

// please check your locally-necessary connection string
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://root:root@127.0.0.1/blink?authSource=admin"
);

const blinkSeed = [
  {
    meeting_name: "Blink Seed",
    objective: ["Schema", "JavaScript", "Typing"],
    acceptance_criteria: ["ES6", "Time"],
    resolution: "We have decided to use ES6",
    notes: ["Dogs cannot type well, they have no toe dexterity", "Cat's use their tails for typing"],
    attendees: ["Bob", "John", "Lucky", "Shauna", "Fitzwilliam"],
    cost: 346,
    duration: 50,
    rating: [5, 8, 2],
    role: ["Captian", "First Mate", "Bosun", "Purser"],
    },
    {
    meeting_name: "Seinfeld",
    objective: ["Friends", "Couch", "Diner"],
    acceptance_criteria: ["Close Talking", "Soup Nazi"],
    resolution: "Binge watch Entire shoe",
    notes: ["Jerk store called, they're running out of you", "When you look annoyed, people think your busy", "Yada, yada, yada"],
    attendees: ["Jerry", "Elaine", "George", "Kramer"],
    cost: 258,
    duration: 30,
    rating: [10, 10, 10],
    role: ["Comedian", "Architec", "Hipster", "Writer"],
    }
  
  ];

db.Blink
  .remove({})
  .then(() => db.Blink.collection.insertMany(blinkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
