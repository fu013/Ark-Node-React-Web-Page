const express = require("express");
const router = express.Router();

// 라우터 설정
router.get("/", (req, res) => {
  res.send("chat server is runnning");
});

module.exports = router;