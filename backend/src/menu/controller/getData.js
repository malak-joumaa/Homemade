const { getCookById } = require("../service");

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

module.exports = {
  getCook,
};
