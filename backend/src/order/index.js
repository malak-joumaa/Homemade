const { Router } = require("express");
const {
  addOrder,
  getOrders,
  deleteOrder,
  updateOrder,
} = require("./controller/order");
const {
  addSubOrder,
  getSubOrdersCook,
  updateSubOrder,
  getCustomerSubOrders,
} = require("./controller/submittedOrder");
const router = Router();

// Orders
router.post("/add-order", addOrder);
router.get("/get-orders", getOrders);
router.delete("/delete-order", deleteOrder);
router.put("/update-order", updateOrder);

// Submitted Orders
router.post("/add-sub-order", addSubOrder);
router.get("/get-sub-orders", getSubOrdersCook);
router.get("/get-c-sub-orders", getCustomerSubOrders);
router.put("/update-sub-order", updateSubOrder);

module.exports = router;
