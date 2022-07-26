const { Router } = require("express");
const {
  register,
  login,
  addCook,
  addCustomer,
  addReview,
  getReview,
  getUser,
  getCooks,
} = require("./controller/user");
const router = Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/add-cook", addCook);
router.post("/auth/add-customer", addCustomer);
router.post("/auth/add-review", addReview);
router.get("/auth/get-review", getReview);
router.get("/auth/get-user", getUser);
router.get("/auth/get-cooks", getCooks);

module.exports = router;
