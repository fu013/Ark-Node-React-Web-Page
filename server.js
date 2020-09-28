const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
require('./schema/userSchema');
const sibal = user.find();

const db = mongoose.connection;
const user = db.collection('User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send(console.log()`${sibal}`));
});


const port = process.env.PORT || 9983;

// 몽고 DB
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});


mongoose.connect('mongodb://scarlet:tmdcks2416@localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(port, () => console.log(`Listening on port ${port}`));



const User = db.collection('User');
// Default값으로 User컬렉션 다큐먼트 하나 추가
User.insertMany([{"nickname": "너구리", "password": "tmdcks2416", "name": "이승찬", "birth": "1996-02-08", 
"email": "fu017@naver.com", "phone": "01099834669", "grade": "5" }]);