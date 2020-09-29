// 기본 서버단 파일 - 익스프레스, 바디파서, 몽고DB 주소
const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const { default: App } = require('./client/src/App');

//몽고 디비 잡 오류 잡기 용도
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// 스키마 주소
require('./schema/userSchema');

// db 커넥션
const db = mongoose.connection;

// User 컬렉션
const user = db.collection('User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//extened true를 하면 추가적인 배열까지 받아올 수 있다. 

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
User.insertMany([{"nickname": "너구리", "password": "tmdcks2416", "name": "이승찬", "birth": "1996-02-08", 
"email": "fu017@naver.com", "phone": "01099834669", "grade": "5" }]);