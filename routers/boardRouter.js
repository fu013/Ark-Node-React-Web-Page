// 데이터 몽고DB, CRUD 구문 작성 전용 라우터
const express = require("express");
const router = express.Router();
const user = require("../schemas/user");


// xo로 리액트에서 비동기 통신을 쏴줬을때 /board/요청명 주소로 요청이 오면 
// async, await 방식으로 비동기 처리한다.
// delete 요청 처리
router.post("/delete", async (req, res) => {
    try {
        await Board.remove({
            _id: req.body._id
        });
        res.json({ message: "게시글이 삭제되었습니다." }); // true
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

// update 요청 처리
router.post("/update", async (req, res) => {
    try {
        await Board.update(
            {_id: req.body._id},
            {$set: {
                writer: req.body.writer,
                title: req.body.title,
                content: req.body.content 
            }}
        );
        res.json({ message: "게시글이 수정 되었습니다."});
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

// write 요청 처리
router.post("/write", async (req, res) => {
    try {
        const obj = {
            writer: req.body._id,
            title: req.body.title,
            content: req.body.content
        };
        console.log(obj);
        const board = new Board(obj);
        await board.save();
        res.json({ message: "게시글이 업로드 되었습니다."});
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

// 조회(find) 요청 처리
router.post("/getBoardList", async (req, res) => {
    try {
        const _id = req.body._id;
        const board = await Board.find({ writer: _id }, null, {sort: {createdAt: -1}}); // -1이 내림차순, 1이 오름차순
        res.json({ list: board });
        // list라는 키값으로 board 내용을 제이슨 형태로 보내준다.
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

/* router.post("/detail", async (req, res) => {

}) */