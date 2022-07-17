const { Router } = require("express");
const {
  register,
  login,
  addCook,
  addCustomer,
  addReview,
} = require("./controller/user");
const router = Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/add-cook", addCook);
router.post("/auth/add-customer", addCustomer);
router.post("/auth/add-review", addReview);

module.exports = router;
