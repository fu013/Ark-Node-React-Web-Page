const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const port = process.env.PORT || 9983;

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/128/128/any',
            'name': '이승찬',
            'birthday': '960208',
            'gender': '남자',
            'job': '취준생'
            },
            {
            'id': 2,
            'image': 'https://placeimg.com/128/129/any',
            'name': '신영진',
            'birthday': '961212',
            'gender': '남자',
            'job': '회사원'
            }
    ]);
});


// 몽고 DB
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://root:tmdcks2416@localhost:27017/admin');
// mongoose.connect('mongodb://username:password@host:port/database?options...');

 app.listen(port, () => console.log(`Listening on port ${port}`));

/* ----- MongoDB -----*/

// Schema 생성
const user = mongoose.Schema({
    no : 'number',
    id : 'string',
    nickname : 'string',
    pw : 'string',
    name : 'string',
    birth : 'string',
    gender : 'string',
    email : 'string',
    phone : 'number',
    grade : 'number'
});

// 정의된 Schema를 객체처럼 사용할 수 있도록 model() 함수로 Compile 해줌.
const User = mongoose.model('Schema', user);

// user Schema(DB)에 새로운 collection(Table) 추가
const newUser = new User({ no : '1', id : 'scarlet', nickname : 'scarlet', pw : 'tmdcks2416@', name : '이승찬', birth : '1996-02-08', gender : '남자', email : 'fu017@naver.com', phone : '01099834669', grade : '5' });

// 세이브, 컬렉션 조회 방법
/* 
    // Data save
    newUser.save(function(error, data){
        if(error){
            console.log(error);
        }else{
            console.log('User infomation has uploaded Succesfully.');
        }
    });

    // user(Schema) Reference All Data Bringing...
    User.find(function(error, users){
        console.log('--- Read all ---');
        if(error){
            console.log(error);
        }else{
            console.log(users);
        }
    })
 */
