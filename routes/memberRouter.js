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
});

// 로그아웃
router.get("/logout", (req, res) => {
    console.log("/logout" + req.sessionID);
    req.session.destroy(() => {
        res.json({ message: true });
    });
});

// 회원탈퇴
router.post("/delete", async(req, res) => {
    try {
        await User.remove({
            _id: req.body._id
        });
        res.json({ message: true });
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

// 회원수정
router.post("/update", async (req, res) => {
    try {
        await User.update({
            _id: req.body._id,
            name: req.body.name,
            age: req.body.age,
            married: req.body.married
        });
        res.json({ message: true });
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

router.post("/add", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json({ message: true });
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

router.post("/getAllMember", async (req, res) => {
    try {
        const user = await User.find({});
        res.json({ message: user });
    } catch (err) {
        console.log(err);
        res.json({ messsage: false });
    }
});

module.exports = router;
