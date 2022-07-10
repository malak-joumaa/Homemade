const { Router } = require("express");
const { register, login, addCook } = require("./controller/user");
const router = Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/addcook", addCook);

module.exports = router;
