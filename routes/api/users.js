const router = require("express").Router();
const usersController = require("../../controllers/usersController");

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