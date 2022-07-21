const Order = require("../../model/Order");

//Add Order function
async function newOrder(body) {
  const {
    quantity,
    total,
    cook,
    customer,
    dish,
    answers,
    status,
    pickup_hours,
    route,
  } = body;

  const order = new Order({
    quantity,
    total,
    cook,
    customer,
    dish,
    answers,
    status,
    pickup_hours,
    route,
  });

  return await order.save();
}
module.exports = {
  newOrder,
};
