const Order = require("../../model/Order");

//Add Order function
async function newOrder(body) {
  const {
    quantity,
    status,
    pickup_hours,
    route,
    date,
    total,
    cook,
    customer,
    answers,
    dishes,
  } = body;

  const order = new Order({
    quantity,
    total,
    cook,
    customer,
    dishes,
    answers,
    status,
    pickup_hours,
    route,
  });

  return await order.save();
}
