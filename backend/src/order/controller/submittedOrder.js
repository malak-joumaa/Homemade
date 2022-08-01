const {
  newSubOrder,
  getSubOrdersById,
  getSubOrdersByCustomerId,
} = require("../service");
const SubmittedOrder = require("../../../model/SubmittedOrder");
const Cook = require("../../../model/Cook");
const Customer = require("../../../model/Customer");

// Order
async function addSubOrder(req, res) {
  try {
    console.log(req.body);
    if (!req.body) return res.status(400).send("Invalid Inputs");

    const subOrderResult = await newSubOrder(req.body);
    console.log("subOrderResult =>", subOrderResult);
    if (!subOrderResult) return res.status(400).send("Invalid Inputs");

    // Updating customer containing this order
    const updateCustomer = await Customer.updateOne(
      {
        _id: subOrderResult.customer,
      },
      {
        $push: {
          submittedOrders: subOrderResult._id,
        },
      }
    );
    console.log("updateCustomer =>", updateCustomer);

    // Updating cook having this order
    const updateCook = await Cook.updateOne(
      {
        _id: subOrderResult.cook,
      },
      {
        $push: {
          submittedOrders: subOrderResult._id,
        },
      }
    );
    console.log("updateCook =>", updateCook);

    return res.status(200).send(subOrderResult);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

//Get submitted orders by cook Id
async function getSubOrders(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getSubOrdersById(id);
      console.log("submitted order data =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

//Get submitted orders by customer Id
async function getCustomerSubOrders(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getSubOrdersByCustomerId(id);
      console.log("submitted order data =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

// Update submitted order by id
async function updateSubOrder(req, res) {
  try {
    console.log("update");
    const subOrder = await SubmittedOrder.findByIdAndUpdate(
      { _id: req.query.id },
      {
        $set: {
          status: req.body.status,
          rated: req.body.rated,
        },
      }
    );
    return res.send();
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addSubOrder,
  getSubOrders,
  updateSubOrder,
  getCustomerSubOrders,
};
