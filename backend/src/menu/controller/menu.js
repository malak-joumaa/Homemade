const { newMenu, newDish } = require("../service");
const Menu = require("../../../model/Menu");
const Cook = require("../../../model/Cook");

// Add Menu
async function addMenu(req, res) {
  try {
    console.log(req.body);
    if (!req.body) return res.status(400).send("Invalid Credentials");

    const menuResult = await newMenu(req.body);
    console.log("menuResult =>", menuResult);
    if (!menuResult) return res.status(400).send("Invalid Credentials");

    // Updating cook having this menu
    const updateCook = await Cook.updateOne(
      {
        _id: menuResult.cook,
      },
      {
        $push: {
          menu: menuResult._id,
        },
      }
    );
    console.log("updateCook =>", updateCook);

    return res.status(200).send(menuResult);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

// Add Dish
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

// Delete menu by id
async function deleteMenu(req, res) {
  try {
    const menu = await Menu.findOne({ _id: req.query.id });
    if (!menu) return res.status(400).send("invalid credentials");

    const deleteMenu = await menu.remove();

    await Cook.updateOne({ _id: menu.cook }, { $pull: { menu: menu._id } });

    return res.send("menu removed");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addMenu,
  addDish,
  deleteMenu,
};
