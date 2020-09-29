// 기본 서버단 파일 - 익스프레스, 바디파서 참조
const express = require('express');
const bodyParser  = require('body-parser');

// 익스프레스 app 변수에 담아 실행
const app = express();

// 동일기원이 아닌, 즉 같은 주소가 아니더라도 붙을수 있게 해줌
// 3000번 포트에서 노드js서버에서 붙을수있게해줌
const cors = require("cors");

// 노드서버-세션 참조
/* const session = require("express-session"); */

// 몽구스 모듈 참조
const mongoose = require('mongoose');

// 서버 실행시 default 파일을 app.js 로 설정, 주소 참조
/* const { default: App } = require('./client/src/App'); */

// cors 세팅
const corsOptions = {
    origin: true,
    credentials: true
}

//몽고 디비 잡 오류 잡기 용도
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// 스키마 주소
require('./schema/userSchema');

// db 커넥션
const db = mongoose.connection;

// User 컬렉션
/* const User = db.collection('User'); */

// 노드서버의 세션 세팅, https는 붙지 못함
/* app.use({
    session({
        resave: false,
        saveUninitialized: true,
        secret: "scarlet",
        cookie: {
            httpOnly: true,
            secure: false
        }
    })
}); */

//extened true를 하면 추가적인 배열까지 받아올 수 있다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// 라우터 주소 => Router : 서버단에서 하는일들을 가독성과 협업을 위해 분리해놓은 것들
// app.use("/board", require("./routers/boardRouter"));


// app.get('/api/customers', (req, res) => {
// });

// 포트 주소
const port = process.env.PORT || 9983;

// 몽고 DB 연결
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

// 몽고 DB 주소 및 포트 연결
mongoose.connect('mongodb://scarlet:tmdcks2416@localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true });

// 서버를 실행
app.listen(port, () => console.log(`Listening on port ${port}`));

// Default값으로 서버가 시작될때마다, User컬렉션 다큐먼트 하나 추가
/* User.insertMany([{"nickname": "너구리", "password": "tmdcks2416", "name": "이승찬", "birth": "1996-02-08", 
"email": "fu017@naver.com", "phone": "01099834669", "grade": "5" }]); */