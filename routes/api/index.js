const router = require("express").Router();
const meetingRoutes = require("./meetings");

// Book routes
router.use("/meetings", meetingRoutes);

module.exports = router;
