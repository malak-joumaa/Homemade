const { newCategory, newMenu } = require("../service");

// Category
async function addCategory(req, res) {
  try {
    console.log(req.body);

    const addCategoryResult = await newCategory(req.body);
    console.log("addCategoryResult =>", addCategoryResult);

    return res.send({ id: addCategoryResult._id });
  } catch (error) {
    console.log(error);
  }
}

// Menu
async function addMenu(req, res) {
  try {
    console.log(req.body);

    const addMenuResult = await newMenu(req.body);
    console.log("addMenuResult =>", addMenuResult);

    return res.send({ menu_id: addMenuResult._id });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addCategory,
  addMenu,
};
