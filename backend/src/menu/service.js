const Menu = require("../../model/Menu");
const Dish = require("../../model/Dish");
const Category = require("../../model/Category");
const Question = require("../../model/Question");

//Add Menu function
async function newMenu(body) {
  const { cook, days, dishes } = body;

  const menu = new Menu({
    cook,
    days,
    dishes,
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

//Add Question
async function newQuestion(body) {
  const { question, dish, question_type, choices } = body;

  const quest = new Question({
    question,
    dish,
    question_type,
    choices,
  });

  return await quest.save();
}

async function getByType(type) {
  return await Category.find({ created_by: type });
}

async function getCategories() {
  return await Category.find();
}

module.exports = {
  newMenu,
  newDish,
  newCategory,
  newQuestion,
  getByType,
  getCategories,
};
