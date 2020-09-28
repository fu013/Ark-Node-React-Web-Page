/* ----- MongoDB -----*/
'use strict';

const mongoose = require('mongoose');



//userSchema 생성
const userSchema = new mongoose.Schema({
    nickname: { type: String, required: true, unique: true, trim: true, index: true },
    password: { type: String, required: true, lowercase: true, trim: true, index: true },
    name: { type: String, required: true, trim: true, index: true },
    birth: { type: Date, required: true, trim: true, index: true},
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    phone: { type: Number, required: true, default: 0, max: 11, index: true },
    grade: { type: Number, required: true, default: 1, max: 1, index: true },
    createdAt: { type: Date, required: true, default: Date.now, index: true },
    any: [mongoose.Schema.Types.Mixed ],
    id: mongoose.Schema.Types.ObjectId
  });
//userSchema.index({ email: 1, nickname: 1 });


/*
  스키마에 virtual을 붙이면 users 컬렉션을 조회할 때 
  { email: ..., password: ..., nickname: ..., detail: ... }처럼 detail 필드가 생긴다. 
  그리고 get 메소드 안에 넣어준 함수의 return 값이 들어있다. 기존 필드들을 활용해서 새로운 가상 필드를 만드는 기능이다. 
*/
  userSchema.virtual('detail').get(function() {
    return `저는 ${this.name }이고 생성 날짜는 ${this.createdAt.toLocaleString()}입니다.`;
  });



/* 
  스키마나 다큐먼트에 사용자 정의 메소드를 붙이는 기능. 
  직접 비밀번호가 일치하는지 확인하는 코드를 짤 필요없이 userSchema에 정의한 메소드로 재사용할 수 있다. 
  또 다큐먼트가 아닌 모델이나 쿼리에 직접 static method를 붙일 수도 있다. 
*/
/*   userSchema.methods.comparePassword = function(pw ,cb)  {
    if (this.password === pw) {
      cb(null, true);
    } else {
      cb('password 불일치');
    }
  }; */

  //나중에 user 다큐먼트를 받게 되면
  /* userSchema.comparePassword('비밀번호', function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  }); */

//statics은 Users 모델에서 바로 쓸 수 있는 메소드이고, query는 한 번 쿼리 후에 이어서 쓰는 메소드이다.
/*   userSchema.statics.findByBirth = function(birth) {
    return this.find({ birth: { $gt: birth } });
  };
  userSchema.query.sortByName = function(order) {
    return this.sort({ nickname: order });
  };
  User.findByName('이승찬').sortByName(-1); */


/* 
  pre와 post Methods
  스키마에 붙여 사용하는데, 각각 특정 동작 이전, 이후에 어떤 행동을 취할 지를 정의할 수 있습니다. Hook를 건다고 생각하면 된다. 
*/
/*   userSchema.pre('save', function(next) {
    if (!this.email) { // email 필드가 없으면 에러 표시 후 저장 취소
      throw '이메일이 없습니다';
    }
    if (!this.createdAt) { // createdAt 필드가 없으면 추가
      this.createdAt = new Date();
    }
    next();
  });
  userSchema.post('find', function(result) {
    console.log('저장 완료', result);
  }); */


/* 
  정의된 Schema를 MongoDB에서 객체처럼 사용할 수 있도록 model() 함수로 JS 객체표기 데이터들을 DB에 보낼때 Compile 해줌.
  세번째 인자로 컬렉션 이름을 주면 강제 필터링에 의한 개명을 방지할 수 있다. 
*/
module.exports = mongoose.model('User', userSchema, 'User');