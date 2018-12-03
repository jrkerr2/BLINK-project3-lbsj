const router = require("express").Router();
const meetingsController = require("../../controllers/meetingsController");

// Equivalent to "/api/meetings"
router.route("/")
  // .get(console.log("You made it to /api/meetings"))
  .get(meetingsController.findAll)
  .post(meetingsController.create);

// Equivalent to "/api/meetings/:id"
router.route("/:id")
  .get(meetingsController.findById)
  .put(meetingsController.update)
  .delete(meetingsController.remove);

// Equivalent to "/api/meetings/feed/:id"
router.route("/feed/:id")
  .get(meetingsController.findFeedById)
  .put(meetingsController.updateFeed)
  .delete(meetingsController.remove);

// Equivalent to "/api/meetings/attendees/:id"
router.route("/attendees/:id")
.get(meetingsController.findById)
.put(meetingsController.updateAttendees)
.delete(meetingsController.remove);

module.exports = router;