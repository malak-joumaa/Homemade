const Menu = require("../../model/Menu");
const Dish = require("../../model/Dish");
const Category = require("../../model/Category");
const Question = require("../../model/Question");
const Cook = require("../../model/Cook");
const User = require("../../model/User");

//Add Menu function
async function newMenu(body) {
  const { cook, days, dishes } = body;

  const menu = new Menu({
    cook,
    dishes,
  });

  return await menu.save();
}

//Add dish function
async function newDish(body) {
  const {
    name,
    description,
    price,
    quantity,
    photo,
    menu,
    categories,
    questions,
  } = body;

  const dish = new Dish({
    name,
    description,
    price,
    quantity,
    photo,
    menu,
    categories,
    questions,
  });

  return await dish.save();
}

//Add Category function
async function newCategory(body) {
  const { name, created_by } = body;

  const category = new Category({
    name,
    created_by,
  });

  return await category.save();
}

async function getByType(type) {
  return await Category.find({ created_by: type });
}

async function getCategories() {
  return await Category.find();
}

async function getCookById(id) {
  return await Cook.findById(id).populate("user");
}

async function getMenusBycookId(id) {
  return await Menu.find({ cook: id }).populate("dishes");
}

module.exports = {
  newMenu,
  newDish,
  newCategory,
  getByType,
  getCategories,
  getCookById,
  getMenusBycookId,
};
