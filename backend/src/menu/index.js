const { Router } = require("express");
const { addMenu, addDish } = require("./controller/menu");
const { addCategory, getCategory } = require("./controller/categories");
const { getCook, getMenu, getMenus } = require("./controller/getData");

const router = Router();

router.post("/add-menu", addMenu);
router.post("/add-dish", addDish);
router.post("/add-category", addCategory);
router.get("/get-category", getCategory);
router.get("/display-cook", getCook);
router.get("/get-menu", getMenu);
router.get("/all-menus", getMenus);

module.exports = router;
