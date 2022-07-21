const { Router } = require("express");
const { addOrder, getOrders } = require("./controller/order");
const router = Router();

router.post("/add-order", addOrder);
router.get("/get-orders", getOrders);

module.exports = router;
