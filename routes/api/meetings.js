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

module.exports = router;