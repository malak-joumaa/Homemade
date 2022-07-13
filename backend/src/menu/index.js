const { Router } = require("express");
const {
  addMenu,
  addDish,
  addQuestion,
  addChoice,
} = require("./controller/menu");
const { addCategory, getCategory } = require("./controller/categories");
const router = Router();

router.post("/auth/add-category", addCategory);
router.post("/auth/add-menu", addMenu);
router.post("/auth/add-dish", addDish);
router.post("/auth/add-question", addQuestion);
router.post("/auth/answer-choice", addChoice);
router.get("/auth/add-category", addCategory);
router.get("/auth/get-category", getCategory);

module.exports = router;
