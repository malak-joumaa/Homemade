const Menu = require("../../model/Menu");
const Dish = require("../../model/Dish");

//Add Menu function
async function newMenu(body) {
  const { cook, dishes } = body;

  const menu = new Menu({
    cook,
    dishes,
  });

  return await menu.save();
}

//Add dish function
async function newDish(body) {
  const { name, description, price, quantity, photo, menu, questions } = body;

  const dish = new Dish({
    name,
    description,
    price,
    quantity,
    photo,
    menu,
    questions,
  });

  return await dish.save();
}

async function getMenuByCookId(id) {
  return await Menu.find({ cook: id }).populate("dishes");
}

async function getAllMenus() {
  return await Menu.find().populate("cook");
}

module.exports = {
  newMenu,
  newDish,
  getMenuByCookId,
  getAllMenus,
};
