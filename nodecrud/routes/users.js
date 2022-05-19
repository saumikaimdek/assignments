const router = require("express").Router();
const usersController = require('../controllers/usersController');

router.post("/", usersController.users_create);
router.get("/", usersController.users_all);
router.get("/:usersId", usersController.users_details);
router.put("/:usersId", usersController.users_update);
router.delete("/:usersId", usersController.users_delete);

module.exports = router;