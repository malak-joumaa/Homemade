const { newCategory, getByType, getCategories } = require("../service");

//Get categories
async function getCategory(req, res) {
  try {
    console.log(req.query);

    if (req.query.type) {
      const type = req.query.type;
      const result = await getByType(type);
      console.log("admin categories =>", result);
      return res.send(result);
    } else {
      const result = await getCategories();
      console.log("categories =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

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
  getCategory,
};
