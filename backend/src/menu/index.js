const { Router } = require("express");
const {
  addCategory,
  addMenu,
  addDish,
  addQuestion,
  addChoice,
} = require("./controller/menu");
const router = Router();

router.post("/auth/add-category", addCategory);
router.post("/auth/add-menu", addMenu);
router.post("/auth/add-dish", addDish);
router.post("/auth/add-question", addQuestion);
router.post("/auth/answer-choice", addChoice);

module.exports = router;
