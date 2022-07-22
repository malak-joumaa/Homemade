const { Router } = require("express");
const { addOrder, getOrders, deleteOrder } = require("./controller/order");
const router = Router();

router.post("/add-order", addOrder);
router.get("/get-orders", getOrders);
router.delete("/delete-order", deleteOrder);

module.exports = router;
