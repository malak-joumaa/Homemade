const { Router } = require("express");
const {
  addMenu,
  addDish,
  addQuestion,
  addChoice,
} = require("./controller/menu");
const { addCategory, getCategory } = require("./controller/categories");
const router = Router();

router.post("/add-menu", addMenu);
router.post("/add-dish", addDish);
router.post("/add-question", addQuestion);
router.post("/answer-choice", addChoice);
router.post("/add-category", addCategory);
router.get("/get-category", getCategory);

module.exports = router;
