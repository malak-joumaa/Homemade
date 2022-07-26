const { Router } = require("express");
const {
  addOrder,
  getOrders,
  deleteOrder,
  updateOrder,
} = require("./controller/order");
const {
  addSubOrder,
  getSubOrders,
  updateSubOrder,
} = require("./controller/submittedOrder");
const router = Router();

router.post("/add-order", addOrder);
router.get("/get-orders", getOrders);
router.delete("/delete-order", deleteOrder);
router.put("/update-order", updateOrder);

router.post("/add-sub-order", addSubOrder);
router.get("/get-sub-orders", getSubOrders);
router.put("/update-sub-order", updateSubOrder);

module.exports = router;
