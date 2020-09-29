// 데이터 몽고DB, CRUD 구문 작성 전용 라우터
const express = require("express");
const router = express.Router();
const user = require("../schemas/user");

// 회원 가입
router.post("/join", async (req, res) => {
    try {
        const obj = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        };
        const user = new user(obj);
        await user.save();
        res.json({ message: "회원가입이 되었습니다!"});
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

// 로그인
router.post("/login", async (req, res) => {
    try {
        const obj = {
            email: req.body.email,
            password: req.body.password
        };
        const user = await user.find(obj);
        console.log(user[0]);
        if (user[0]) {
            console.log(req.body._id);
            res.json({ message: "로그인 되었습니다!", _id:user[0]._id });
        } else {
            res.json({ message: false });
        }
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
})

module.exports = router;