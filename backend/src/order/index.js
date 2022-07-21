const { Router } = require("express");
const { addOrder } = require("./controller/order");
const router = Router();

router.post("/add-order", addOrder);
module.exports = router;
