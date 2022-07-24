const Message = require("../../model/Message");
const Conversation = require("../../model/Conversation");

//New Message
async function newMessage(body) {
  const { conversationId, sender, text } = body;

  const message = new Message({
    conversationId,
    sender,
    text,
  });

  return await message.save();
}

//New Conversation
async function newConversation(body) {
  const { members } = body;

  const conversation = new Conversation({
    members,
  });

  return await conversation.save();
}

// Get Conversation By User Id
async function getConversationByUserId(userId) {
  return await Conversation.find({ members: { $in: [userId] } });
}

// Get Messages By Convo Id
async function getMessageByConvoId(convoId) {
  return await Message.find({ conversationId: convoId });
}

module.exports = {
  newMessage,
  newConversation,
  getConversationByUserId,
  getMessageByConvoId,
};
