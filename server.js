const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const Pusher = require("pusher");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets for Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Pusher connect
var pusher = new Pusher({
  appId: '648683',
  key: 'c785fb8623f55789d46b',
  secret: 'a21fe0f432e225905f86',
  cluster: 'us2',
  encrypted: true
});

// *** IGNORE -- PUSHER PoC
// pusher.trigger('jk-channel', 'jk-event', {
//   "message": "hello, Nana!",
//   "name": "stuff",
//   "channel": "ON home demo"

// });

// Add routes, both API and view
app.use(routes);

// Connect to the Blink database on Mongo
var dbCon = process.env.MONGODB_URI || "mongodb://root:root@192.168.99.100/blink?authSource=admin"

// var dbCon = "mongodb://root:root@192.168.99.100/blink?authSource=admin";
mongoose.connect(dbCon, { useNewUrlParser: true }, function(error) {
  if (error) {
    console.log("Database _BLINK_ Error:", error);
  }
  console.log("Connected to the Blink Meetings database @ " + dbCon)
});

// Start the API server
app.listen(PORT, function() {
  console.log(` ==> *lbsj* BLINK Meetings API server now listening on PORT ${PORT} <==`);
});
