const express = require("express");
const router = express.Router();

// 라우터 설정
router.get("/chat", (req, res) => {
  res.send("chat server is runnning");
});

module.exports = router;