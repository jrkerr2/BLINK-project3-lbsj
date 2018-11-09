const router = require("express").Router();
const meetingRoutes = require("./meetings.js");
const userRoutes = require("./users.js");

// Meeting routes
router.use("/meetings", meetingRoutes);

// User routes
router.use("/users", userRoutes);

module.exports = router;
