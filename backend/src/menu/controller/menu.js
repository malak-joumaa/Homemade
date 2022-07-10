const { newCategory } = require("../service");

// Category
async function addCategory(req, res) {
  try {
    console.log(req.body);

    const addCategoryResult = await addCategory(req.body);
    console.log("addCategoryResult =>", addCategoryResult);

    return res.send({ menu: addCategoryResult._id });
  } catch (error) {
    console.log(error);
  }
}
