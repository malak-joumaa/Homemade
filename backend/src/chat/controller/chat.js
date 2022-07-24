const {
  newConversation,
  newMessage,
  getConversationByUserId,
} = require("../service");
const Conversation = require("../../../model/Conversation");

// Add Menu
async function addConversation(req, res) {
  try {
    console.log(req.body);
    if (!req.body) return res.status(400).send("Invalid Credentials");

    const conversationResult = await newConversation(req.body);
    console.log("conversationResult =>", conversationResult);
    if (!conversationResult) return res.status(400).send("Invalid Credentials");

    return res.status(200).send(conversationResult);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

//Get Cook
async function getConversation(req, res) {
  try {
    console.log(req.query);

    if (req.query.id) {
      const id = req.query.id;
      const result = await getConversationByUserId(id);
      console.log("conversation data =>", result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addConversation,
  getConversation,
};
