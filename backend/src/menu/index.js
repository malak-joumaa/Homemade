const { Router } = require("express");
const { addMenu, addDish } = require("./controller/menu");
const { getMenu, getMenus } = require("./controller/getMenus");

const router = Router();

router.post("/add-menu", addMenu);
router.post("/add-dish", addDish);
router.get("/get-menu", getMenu);
router.get("/all-menus", getMenus);

module.exports = router;
