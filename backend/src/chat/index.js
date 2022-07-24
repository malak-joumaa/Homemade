const { Router } = require("express");
const { addConversation, getConversation } = require("./controller/chat");

const router = Router();

router.post("/add-convo", addConversation);
router.get("/get-convo", getConversation);

module.exports = router;
