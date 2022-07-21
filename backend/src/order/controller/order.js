const { newOrder } = require("../service");
const Order = require("../../../model/Order");

// Menu
async function addOrder(req, res) {
  try {
    console.log(req.body);
    if (!req.body) return res.status(400).send("Invalid Inputs");

    const orderResult = await newOrder(req.body);
    console.log("orderResult =>", orderResult);
    if (!orderResult) return res.status(400).send("Invalid Inputs");

    return res.status(200).send(orderResult);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  addOrder,
};
