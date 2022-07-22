const { Router } = require("express");
const {
  addOrder,
  getOrders,
  deleteOrder,
  updateOrder,
} = require("./controller/order");
const router = Router();

router.post("/add-order", addOrder);
router.get("/get-orders", getOrders);
router.delete("/delete-order", deleteOrder);
router.put("/update-order", updateOrder);

module.exports = router;
