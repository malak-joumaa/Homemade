const { Router } = require("express");
const { addCategory } = require("./controller/menu");
const router = Router();

router.post("/auth/add-category", addCategory);

module.exports = router;
