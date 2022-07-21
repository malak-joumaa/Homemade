const { newOrder } = require("../service");
const Order = require("../../../model/Order");
const Cook = require("../../../model/Cook");
const Customer = require("../../../model/Customer");

// Menu
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

    return res.status(200).send(orderResult);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  addOrder,
};
