const { newMenu, newDish, newQuestion } = require("../service");
const Menu = require("../../../model/Menu");

// Menu
async function addMenu(req, res) {
  try {
    console.log(req.body);
    if (!req.body) return res.status(400).send("Invalid Credentials");

    const menuResult = await newMenu(req.body);
    console.log("menuResult =>", menuResult);
    if (!menuResult) return res.status(400).send("Invalid Credentials");

    return res.status(200).send(menuResult);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

// Dish
async function addDish(req, res) {
  try {
    console.log(req.body);
    if (!req.body) return res.status(400).send("Invalid Credentials");

    const dishResult = await newDish(req.body);
    console.log("dishResult =>", dishResult);
    if (!dishResult) return res.status(400).send("Invalid Credentials");

    // Updating menu containing this dish
    const updateMenu = await Menu.updateOne(
      {
        _id: dishResult.menu,
      },
      {
        $push: {
          dishes: dishResult,
        },
      }
    );
    console.log("updateMenu =>", updateMenu);

    return res.status(200).send(dishResult);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  addMenu,
  addDish,
};
