const { newConversation, newMessage } = require("../service");
const Conversation = require("../../../model/Conversation");

// AddMenu
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

module.exports = {
  addConversation,
};
