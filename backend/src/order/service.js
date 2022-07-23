const Order = require("../../model/Order");
const SubmittedOrder = require("../../model/SubmittedOrder");

//Add Order function
async function newOrder(body) {
  const { quantity, total, cook, customer, dish, answers, status } = body;

  const order = new Order({
    quantity,
    total,
    cook,
    customer,
    dish,
    answers,
    status,
  });

  return await order.save();
}

async function getOrdersById(id) {
  return await Order.find({ id }).populate("dish");
}

//Add Submitted Order function
async function newSubOrder(body) {
  const { total, pickup_hours, route, status, cook, customer, orders } = body;

  const subOrder = new SubmittedOrder({
    total,
    pickup_hours,
    route,
    status,
    cook,
    customer,
    orders,
  });

  return await subOrder.save();
}

async function getSubOrdersById(id) {
  return await SubmittedOrder.find({ id }).populate("dish");
}

module.exports = {
  newOrder,
  getOrdersById,
  newSubOrder,
  getSubOrdersById,
};
