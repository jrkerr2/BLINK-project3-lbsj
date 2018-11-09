const router = require("express").Router();
const meetingsController = require("../../controllers/meetingsController");
const usersController = require("../../controllers/usersController");

// Equivalent to "/api/meetings"
router.route("/")
  .get(meetingsController.findAll)
  .post(meetingsController.create);

// Equivalent to "/api/meetings/:id"
router.route("/:id")
  .get(meetingsController.findById)
  .put(meetingsController.update)
  .delete(meetingsController.remove);

// Equivalent to "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Equivalent to "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;