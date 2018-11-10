const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets for Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Blink database on Mongo
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blink");

// var dbCon = "mongodb://root:root@192.168.99.100/blink?authSource=admin";
// mongoose.connect(dbCon, { useNewUrlParser: true }, function(error) {
//   if (error) {
//     console.log("Database _BLINK_ Error:", error);
//   }
//   console.log("Connected to: " + dbCon)
// });

// Start the API server
app.listen(PORT, function() {
  console.log(` ==> lbsj API server now listening on PORT ${PORT} <==`);
});
