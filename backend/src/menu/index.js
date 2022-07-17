const { Router } = require("express");
const { addMenu, addDish, addQuestion } = require("./controller/menu");
const { addCategory, getCategory } = require("./controller/categories");
const { getCook } = require("./controller/getData");

const router = Router();

router.post("/add-menu", addMenu);
router.post("/add-dish", addDish);
router.post("/add-question", addQuestion);
router.post("/add-category", addCategory);
router.get("/get-category", getCategory);
router.get("/display-cook", getCook);

module.exports = router;
