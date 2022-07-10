const Menu = require("../../model/Menu");
const Dish = require("../../model/Dish");
s;

//Add Menu function
async function addMenu(body) {
  const { cook, days } = body;

  const menu = new Menu({
    cook,
    days,
  });

  return await menu.save();
}

//Add dish function
async function addDish(body) {
  const { description, price, quantity, photo, menu, categories } = body;

  const dish = new Dish({
    description,
    price,
    quantity,
    photo,
    menu,
    categories,
  });

  return await dish.save();
}

module.exports = {
  addMenu,
  addDish,
};
