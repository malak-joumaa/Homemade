const { getMenuByCookId, getAllMenus } = require("../service");

//Get Menu
async function getMenu(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getMenuByCookId(id);
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
  getMenu,
  getMenus,
};
