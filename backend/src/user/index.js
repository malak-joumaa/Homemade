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
  getByCookId,
  findNearbyCooks,
  verifyToken,
  updateCook,
} = require("./controller/user");
const router = Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/verify", verifyToken);
router.post("/auth/add-cook", addCook);
router.post("/auth/add-customer", addCustomer);
router.put("/auth/update-cook", updateCook);
router.post("/auth/add-review", addReview);
router.get("/auth/get-review", getReview);
router.get("/auth/get-user", getUser);
router.get("/auth/get-cooks", findNearbyCooks);
router.get("/auth/get-userId", getByCookId);

module.exports = router;
