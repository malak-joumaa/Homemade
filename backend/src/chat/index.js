const { Router } = require("express");
const { addConversation } = require("./controller/chat");

const router = Router();

router.post("/add-convo", addConversation);

module.exports = router;
