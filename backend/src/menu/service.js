const Menu = require("../../model/Menu");
const Dish = require("../../model/Dish");
const Category = require("../../model/Category");

//Add Menu function
async function newMenu(body) {
  const { cook, days } = body;

  const menu = new Menu({
    cook,
    days,
  });

  return await menu.save();
}

//Add dish function
async function newDish(body) {
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

//Add dish function
async function newCategory(body) {
  const { name, created_by } = body;

  const category = new Category({
    name,
    created_by,
  });

  return await category.save();
}

module.exports = {
  newMenu,
  newDish,
  newCategory,
};
