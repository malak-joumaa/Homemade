const { Router } = require("express");
const { addCategory, addMenu, addDish } = require("./controller/menu");
const router = Router();

router.post("/auth/add-category", addCategory);
router.post("/auth/add-menu", addMenu);
router.post("/auth/add-dish", addDish);

module.exports = router;
