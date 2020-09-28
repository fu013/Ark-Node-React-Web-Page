const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
require('./schema/userSchema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/customers', (req, res) => {
// });

const port = process.env.PORT || 9983;

// 몽고 DB
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://scarlet:tmdcks2416@localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(port, () => console.log(`Listening on port ${port}`));



// const User = database.collection('User');
// // Default값으로 User컬렉션 다큐먼트 하나 추가
// User.insertMany([{"nickname": "너구리", "password": "tmdcks2416", "name": "이승찬", "birth": "1996-02-08", 
// "email": "fu017@naver.com", "phone": "01099834669", "grade": "5" }], function(err, result) {
//     if (err) {  // 에러 발생 시 콜백 함수를 호출하면서 에러 객체 전달
//      callback(err, null);
//      return;
//     }

//     // 에러 아닌 경우, 콜백 함수를 호출하면서 결과 객체 전달
//     if (result.insertedCount > 0) {
//         console.log("사용자 레코드 추가됨 : " + result.insertedCount);
//     } else {
//         console.log("추가된 레코드가 없음.");
//     }
       
//     callback(null, result);
// });
