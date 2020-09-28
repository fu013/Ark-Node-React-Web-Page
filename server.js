const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// 잡 에러 제거
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// 유저 스키마 DB 컬렉션 등록
const userSchemaRG = require('./schema/userSchema');

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

mongoose.connect('mongodb://scarlet:tmdcks2416@localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(port, () => console.log(`Listening on port ${port}`));
