 const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Static assets for Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Add routes, both API and view
app.use(routes);

// Connect to the Blink database on Mongo -- check local connection string
var dbCon = process.env.MONGODB_URI || "mongodb://root:root@192.168.99.100/blink?authSource=admin"

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
