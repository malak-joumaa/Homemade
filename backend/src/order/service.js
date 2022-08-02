const Order = require("../../model/Order");
const SubmittedOrder = require("../../model/SubmittedOrder");

//Add Order function
async function newOrder(body) {
  const { quantity, total, cook, customer, dish, answers, status, route } =
    body;

  const order = new Order({
    quantity,
    total,
    cook,
    customer,
    dish,
    answers,
    status,
    route,
  });

  return await order.save();
}

// Get Orders by Customer Id
async function getOrdersById(id) {
  return await Order.find({ customer: id })
    .populate("dish")
    .populate({
      path: "cook",
      populate: { path: "user" },
    });
}

//Add Submitted Order function
async function newSubOrder(body) {
  const { total, pickup_hours, route, status, cook, customer, orders, rated } =
    body;

  const subOrder = new SubmittedOrder({
    total,
    pickup_hours,
    route,
    status,
    cook,
    customer,
    orders,
    rated,
  });

  return await subOrder.save();
}

// Get Submitted Orders by Cook Id
async function getSubOrdersByCookId(id) {
  return await SubmittedOrder.find({ cook: id }).populate("customer");
}

// Get Submitted Orders by Customer Id
async function getSubOrdersByCustomerId(id) {
  return await SubmittedOrder.find({ customer: id }).populate("cook");
}

module.exports = {
  newOrder,
  getOrdersById,
  newSubOrder,
  getSubOrdersByCookId,
  getSubOrdersByCustomerId,
};
