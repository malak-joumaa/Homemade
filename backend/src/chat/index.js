const { Router } = require("express");
const {
  addConversation,
  getConversation,
  addMessage,
  getMessage,
} = require("./controller/chat");

const router = Router();

router.post("/add-convo", addConversation);
router.get("/get-convo", getConversation);

router.post("/add-message", addMessage);
router.get("/get-message", getMessage);

module.exports = router;
