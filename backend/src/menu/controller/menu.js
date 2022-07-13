const { newMenu, newDish, newQuestion } = require("../service");
const Menu = require("../../../model/Menu");
const Dish = require("../../../model/Dish");
const Question = require("../../../model/Question");

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
          dishes: dishResult._id,
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

// Question
async function addQuestion(req, res) {
  try {
    console.log(req.body);
    if (!req.body) return res.status(400).send("invalid credentials");

    const questionResult = await newQuestion(req.body);
    console.log("questionResult =>", questionResult);
    if (!questionResult) return res.status(400).send("Invalid Credentials");

    // Updating dish containing this question
    const updateDish = await Dish.updateOne(
      {
        _id: questionResult.dish,
      },
      {
        $push: {
          questions: questionResult._id,
        },
      }
    );
    console.log("updateDish =>", updateDish);

    return res.status(200).send(questionResult);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  addMenu,
  addDish,
  addQuestion,
};
