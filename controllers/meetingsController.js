const db = require("../models");

// Defining methods for the meetingsController

module.exports = {
    
  findAll: function(req, res) {
    console.log("You've reached findAll");
    db.Meeting
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    console.log("You've reached findById");
    db.Meeting
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log(" **=> you made it to CREATE <=** ");
    console.log(req.body);
    db.Meeting
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateAttendees: function(req, res) {
    console.log(" **=> you made it to UPDATE ATTENDEES <=** ");
    console.log("REQ.BODY.ATTENDEES: " + req.body.attendees);
    db.Meeting
      .findOneAndUpdate({ _id: req.params.id }, {$push: {attendees: req.body.attendees}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateFeed: function(req, res) {
    console.log(" **=> you made it to UPDATE FEED <=** ");
    console.log("REQ.BODY.FEED: " + req.body.feed);
    db.Meeting
      .findOneAndUpdate({ _id: req.params.id }, {$push: {feed: req.body.feed}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Meeting
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    console.log(" **=> you made it to DELETE <=** ");
    console.log(req.body);
    db.Meeting
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
