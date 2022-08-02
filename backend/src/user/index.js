const { Router } = require("express");
const {
  register,
  login,
  addCook,
  addCustomer,
  getUser,
  getCooks,
  getByCookId,
  findNearbyCooks,
  verifyToken,
  updateCook,
  getCook,
} = require("./controller/user");
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify", verifyToken);
router.post("/add-cook", addCook);
router.post("/add-customer", addCustomer);
router.put("/update-cook", updateCook);
router.get("/get-user", getUser);
router.get("/get-cook", getCook);
router.get("/get-all-cooks", getCooks);
router.get("/get-cooks", findNearbyCooks);
router.get("/get-userId", getByCookId);

module.exports = router;
