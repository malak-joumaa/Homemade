const { getCookById, getMenusBycookId, getAllMenus } = require("../service");

//Get Cook
async function getCook(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getCookById(id);
      console.log("cook data =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

//Get Menu
async function getMenu(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getMenusBycookId(id);
      console.log("cook data =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

//Get All Menus
async function getMenus(req, res) {
  try {
    console.log(req.query);
    const result = await getAllMenus();
    console.log("All menus =>", result);
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCook,
  getMenu,
  getMenus,
};
