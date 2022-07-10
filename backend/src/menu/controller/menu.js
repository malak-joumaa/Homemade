const { newCategory } = require("../service");

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

module.exports = {
  addCategory,
};
