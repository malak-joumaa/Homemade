const { newOrder, getOrdersById } = require("../service");
const Order = require("../../../model/Order");
const Cook = require("../../../model/Cook");
const Customer = require("../../../model/Customer");

// Order
async function addOrder(req, res) {
  try {
    console.log(req.body);
    if (!req.body) return res.status(400).send("Invalid Inputs");

    const orderResult = await newOrder(req.body);
    console.log("orderResult =>", orderResult);
    if (!orderResult) return res.status(400).send("Invalid Inputs");

    // Updating customer containing this order
    const updateCustomer = await Customer.updateOne(
      {
        _id: orderResult.customer,
      },
      {
        $push: {
          orders: orderResult._id,
        },
      }
    );
    console.log("updateCustomer =>", updateCustomer);

    // Updating cook having this order
    const updateCook = await Cook.updateOne(
      {
        _id: orderResult.cook,
      },
      {
        $push: {
          orders: orderResult._id,
        },
      }
    );
    console.log("updateCook =>", updateCook);

    return res.status(200).send(orderResult);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

//Get Orders by Customer Id
async function getOrders(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getOrdersById(id);
      // console.log("order data =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

// Delete order by id
async function deleteOrder(req, res) {
  try {
    const order = await Order.findOne({ _id: req.query.id });
    if (!order) return res.status(400).send("invalid credentials");

    const deleteOrder = await order.remove();

    await Customer.updateOne(
      { _id: order.customer },
      { $pull: { orders: order._id } }
    );

    return res.send("order removed");
  } catch (error) {
    console.log(error);
  }
}

// Update order by id
async function updateOrder(req, res) {
  try {
    console.log("update");
    const order = await Order.findByIdAndUpdate(
      { _id: req.query.id },
      {
        $set: {
          status: req.body.status,
          route: req.body.route,
          pickup_hours: req.body.pickup_hours,
        },
      }
    );
    return res.send();
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addOrder,
  getOrders,
  deleteOrder,
  updateOrder,
};
